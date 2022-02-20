<template>
  <div id="app">
    <CircleMenu />
<!-- 
    <transition name="loader-animation" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
      <progress-bar :show-loader="showLoader" :loader-style="loaderStyle" />
    </transition> -->

    <transition name="slide-fade">
      <router-view :key="$route.fullPath" />
    </transition>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex';
import CircleMenu from './components/partials/CircleMenu.vue';
import ProgressBar from './components/partials/ProgressBar.vue';

export default {
  name: "Base",
  data() {
    return {
      showLoader: true,
    };
  },
  computed: {
    ...mapGetters({
      isLoading: 'isLoading',
      loadingProgress: 'loadingProgress', 
    }),

    loaderStyle() {
      return `width: ${this.loadingProgress}%;`;
    },
  },

  components: {
    CircleMenu,
    ProgressBar
  },

  watch: {
    // watch the value of isLoading and once it's false hide the loader
    isLoading(val) {
      if (val == false) {
        let self = this;
        setTimeout(function() {
          self.showLoader = false;
        }, 1000);
      }
    },
  },
};
</script>
