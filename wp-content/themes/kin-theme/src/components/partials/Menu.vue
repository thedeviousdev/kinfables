<template>
  <div class="menu" :class="{ 'menu-open': isMenuOpen }">
    <button class="menu-trigger" @click="toggleMenu">
      <CircleInner />
    </button>
    <transition name="bounce">
      <div class="menu-circle" v-if="isMenuOpen">
        <a href="#" class="menu-circle-link menu-link-1">
          <span>Home</span>
        </a>

        <a href="#" class="menu-circle-link menu-link-2">
          <span>Film</span>
        </a>

        <a href="#" class="menu-circle-link menu-link-3">
          <span>Music</span>
        </a>

        <a href="#" class="menu-circle-link menu-link-4">
          <span>About</span>
        </a>

        <a href="#" class="menu-circle-link menu-link-5">
          <span>Gallery</span>
        </a>

        <a href="#" class="menu-circle-link menu-link-6">
          <span>Novel</span>
        </a>
      </div>
    </transition>
    <div class="menu-bg" v-if="isMenuOpen">
      <MenuBg />
    </div>
  </div>
</template>

<script>
import MenuBg from '../svgs/menu-bg.vue';
import CircleInner from '../svgs/circle-inner.vue';

export default {
  name: "Menu",
  components: {
    MenuBg, CircleInner
  },
  props: ["loaderStyle", "showLoader"],
  data() {
    return {
      isMenuOpen: false
    }
  },
  methods: {
    toggleMenu: function() {
      this.isMenuOpen = !this.isMenuOpen;
    }
  }
};
</script>
