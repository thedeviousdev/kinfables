<template>
  <div class="app-page" :class="{ 'blur': isMenuOpen }" v-if="page">
    <template v-for="(section, index) in page.acf">
      <section v-if="index === 'section-featured'" :key="index" :class="index" :style="{ backgroundImage: 'url(' + section.image.url + ')' }">
        <div class="section-featured-text">
          <h1 class="section-featured-text-title">{{ section.text.title }}</h1>
          <p class="section-featured-text-subtitle" role="doc-subtitle">{{ section.text.subtitle }}</p>
        </div>
      </section>
      <section v-if="index === 'section-gallery'" :key="index" :class="index">
        <div class="section-gallery-filters">
          <button @click="toggleFilter" data-filter="all">All</button>
          <button v-for="(tag, index) in tags" :key="index" @click="toggleFilter" :data-filter="tag.slug">{{ tag.name }}</button>
        </div>
        <div class="section-gallery-images">
          <masonry-wall :items="filteredItems" :ssr-columns="1" :column-width="300" :gap="15">
            <template #default="{ item, index }">
              <Lightbox 
                :src_thumb="item.src_thumb"
                :src_full="item.src_full"
                :alt="item.alt"
                :index="index"
              />
            </template>
          </masonry-wall>
        </div>
      </section>
    </template>
  </div>
  <Loader v-else/>
</template>

<script>
import axios from "axios";
import Loader from "../partials/Loader.vue";
import { mapGetters } from "vuex";
import SETTINGS from "../../settings";
import Lightbox from "../partials/Lightbox.vue"

export default {
  name: "Page",
  data() {
    return {
      page: false,
      filter: "all",
      tags: null
    };
  },
  components: {
    Loader,
    Lightbox
  },
  computed: {
    ...mapGetters({
      isMenuOpen: 'isMenuOpen',
    }),
    items() {
      return this.page.acf['section-gallery'].gallery.map(
        image => {
          return { 
            src_thumb: image.image.sizes.medium_large,
            src_full: image.image.url,
            alt: image.image.alt,
            tags: image.tag.map(tag => tag.slug)
          }
        }
      )
    },
    filteredItems() {
      if(this.filter === "all")
        return this.items
      
      return this.items.filter(image => image.tags.includes(this.filter))
    }
  },

  beforeMount() {
    this.getPage();
    this.getTags();
  },

  methods: {
    getPage: function() {
      axios
        .get(
          SETTINGS.API_BASE_PATH + "pages?slug=" + this.$route.params.pageSlug
        )
        .then(response => {
          this.page = response.data[0];
        })
        .catch(e => {
          console.log(e);
        });
    },
    getTags: function() {
      axios
        .get(
          SETTINGS.API_BASE_PATH + 'tags?hide_empty=false'
        )
        .then(response => {
          this.tags = response.data.map(
            tag => {
              return { 
                name: tag.name,
                slug: tag.slug
              }
            }
          )
        })
        .catch(e => {
          console.log(e);
        });
    },
    toggleFilter(event) {
      this.filter = event.currentTarget.getAttribute('data-filter');
    }
  },
};
</script>
