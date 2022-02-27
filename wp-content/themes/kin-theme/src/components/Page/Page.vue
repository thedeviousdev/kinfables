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
          <button>All</button>
          <button>Illustration</button>
          <button>Photography</button>
          <button>Fan art</button>
          <button>Behind the scenes</button>
        </div>
        <div class="section-gallery-images">
          <masonry-wall :items="items" :ssr-columns="1" :column-width="300" :gap="15">
            <template #default="{ item, index }">
              <img :src="item.src_thumb" :alt="item.alt">
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

export default {
  name: "Page",
  data() {
    return {
      page: false,
    };
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
    }
  },

  beforeMount() {
    this.getPage();
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
    }
  },

  components: {
    Loader
  }
};
</script>
