<template>
  <div class="menu menu-open">
    <div class="menu-trigger">
      <CircleInner />
    </div>
    <div class="menu-circle">
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
    <div class="menu-bg">
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
  props: ["loaderStyle", "showLoader"]
};
</script>
