<template>
  <div class="" v-if="page">
    <template v-for="(section, index) in page.acf">
      <section v-if="index === 'section-featured'" :key="index" :class="index" :style="{ backgroundImage: 'url(' + section.image.url + ')' }">
        <div class="section-featured-text">
          <h1 class="section-featured-text-title">{{ section.text.title }}</h1>
          <p class="section-featured-text-subtitle" role="doc-subtitle">{{ section.text.subtitle }}</p>
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
      page: false
    };
  },

  computed: {},

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
