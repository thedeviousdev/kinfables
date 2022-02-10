<template>
  <div class="menu" :class="{ 'menu-open': isMenuOpen }">
    <button class="menu-trigger" @click="toggleMenu">
      <CircleInner />
    </button>
    <transition name="bounce">
      <div class="menu-circle" v-if="isMenuOpen">
        <a href="#" class="menu-circle-link" id="menuLink1" @mouseenter="sliceHoverOn" @mouseleave="sliceHoverOff">
          <span>Home</span>
        </a>

        <a href="#" class="menu-circle-link" id="menuLink2" @mouseenter="sliceHoverOn" @mouseleave="sliceHoverOff">
          <span>Film</span>
        </a>

        <a href="#" class="menu-circle-link" id="menuLink3" @mouseenter="sliceHoverOn" @mouseleave="sliceHoverOff">
          <span>Music</span>
        </a>

        <a href="#" class="menu-circle-link" id="menuLink4" @mouseenter="sliceHoverOn" @mouseleave="sliceHoverOff">
          <span>About</span>
        </a>

        <a href="#" class="menu-circle-link" id="menuLink5" @mouseenter="sliceHoverOn" @mouseleave="sliceHoverOff">
          <span>Gallery</span>
        </a>

        <a href="#" class="menu-circle-link" id="menuLink6" @mouseenter="sliceHoverOn" @mouseleave="sliceHoverOff">
          <span>Novel</span>
        </a>
      </div>
    </transition>
    <div class="menu-bg" v-if="isMenuOpen">
      <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1923 1922">
        <path class="menu-link" ref="menuLink2" d="M1923 961h-699c-.27-72.201-29.92-137.463-77.58-184.416L1923 0v961Z" fill="#B14F4F"/>
        <path class="" d="M1224 961h-63.5c-.34-54.586-22.97-103.886-59.24-139.259l45.16-45.157c47.66 46.953 77.31 112.215 77.58 184.416Z" fill="#9E4141"/>
        <path class="menu-link" ref="menuLink6" d="M0 961h705.002c.265-70.675 28.675-134.701 74.584-181.414L0 0v961Z" fill="#5D4FB1"/>
        <path class="" d="M705.002 961h63.002c.332-53.189 21.823-101.359 56.48-136.516l-44.898-44.898C733.677 826.299 705.267 890.325 705.002 961Z" fill="#4F4588"/>
        <path class="menu-link" ref="menuLink4" d="M1147.42 1146.42c-46.91 46.71-111.55 75.58-182.92 75.58-72.686 0-138.393-29.94-185.503-78.19L0 1922h1923l-775.58-775.58Z" fill="#49C163"/>
        <path class="" d="M1147.42 1146.42c-46.91 46.71-111.55 75.58-182.92 75.58-72.686 0-138.393-29.94-185.503-78.19l44.673-44.62c35.648 36.59 85.46 59.31 140.58 59.31 53.94 0 102.79-21.76 138.27-56.98l44.9 44.9Z" fill="#41A757"/>
        <path class="menu-link" ref="menuLink3" d="M1147.42 1146.42 1923 1922V961h-699v1c0 72.09-29.28 137.33-76.58 184.42Z" fill="#A44FB1"/>
        <path class="" d="M1147.42 1146.42c47.3-47.09 76.58-112.33 76.58-184.42v-1h-63.5v1.25c0 54.45-22.17 103.72-57.98 139.27l44.9 44.9Z" fill="#894793"/>
        <path class="menu-link" ref="menuLink5" d="M0 961h705.002l-.002 1c0 70.56 28.054 134.56 73.597 181.4L0 1922V961Z" fill="#B1A84F"/>
        <path class="" d="m778.597 1143.4 44.651-44.65c-34.2-35.32-55.248-83.45-55.248-136.5 0-.417.001-.834.004-1.25h-63.002l-.002 1c0 70.56 28.054 134.56 73.597 181.4Z" fill="#9E974C"/>
        <path class="menu-link" ref="menuLink1" d="M1146.42 776.584 1923 0H0l779.988 779.177C827.027 731.525 892.322 702 964.5 702c70.86 0 135.09 28.456 181.92 74.584Z" fill="#BC713A"/>
        <path class="" d="m779.988 779.177 44.922 44.876C860.469 788.202 909.766 766 964.25 766c53.3 0 101.64 21.25 137.01 55.741l45.16-45.157C1099.59 730.456 1035.36 702 964.5 702c-72.178 0-137.473 29.525-184.512 77.177Z" fill="#AA6330"/>
      </svg>
    </div>
  </div>
</template>

<script>
import CircleInner from '../svgs/circle-inner.vue';

export default {
  name: "Menu",
  components: {
    CircleInner
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
    },
    sliceHoverOn: function (event) {
      const menuLinkId = event.target.id
      this.$refs[menuLinkId].classList.add("menu-circle-link-hover")
    },
    sliceHoverOff: function (event) {
      const menuLinkId = event.target.id
      this.$refs[menuLinkId].classList.remove("menu-circle-link-hover")
    }
  }
};
</script>
