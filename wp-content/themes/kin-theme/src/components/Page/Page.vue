<template>
  <div class="bv-example-row pt-4">
    <template v-if="page">
      <h1>{{ page.title.rendered }}</h1>
      <div v-html="page.content.rendered"></div>
    </template>
    <Loader v-else/>
  </div>
</template>

<script>
import axios from "axios";
import Loader from "../partials/Loader.vue";
import { mapGetters } from "vuex";
import SETTINGS from "../../settings";

export default {
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
