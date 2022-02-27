<template>
  <div class="section-gallery-image" @click="isOpen = !isOpen">
    <img :src="src_thumb" :alt="alt">

    <Transition name="fade">
      <div class="section-gallery-image-popup" v-if="isOpen">
        <img :src="src_full" :alt="alt">
      </div>
    </Transition>
  </div>
</template>

<script>
export default {
  name: "Lightbox",
  props: ["src_thumb", "src_full", "alt", "index"],
  data() {
    return {
      isOpen: false,
    }
  },
  methods: {
  },
  created() {
  },
  destroyed() {
  },
};
</script>