<template>
  <div class="circle-preloader-wrapper d-flex align-items-center justify-content-start">
    <div
      class="circle-preloader"
      :style="{
        'min-height': size + 'px',
        'min-width': size + 'px',
        'border-left': depth + 'px solid #EAE8FF',
        'border-top': depth + 'px solid #EAE8FF',
        'border-right': depth + 'px solid #8378EC',
        'border-bottom': depth + 'px solid #8378EC'
      }"
    />
  </div>
</template>
<script lang="ts">
  import Vue from 'vue'
  export default Vue.extend({
    name: 'CirclePreloader',
    props: {
      size: {
        type: Number,
        default: 40
      },
      depth: {
        type: Number,
        default: 4
      }
    }
  })
</script>
<style scoped lang="scss">
  .circle-preloader-wrapper {
    height: 140px;
    .circle-preloader {
      border-radius: 50%;
      animation: 1s rotate-circle-preloader infinite linear;
    }
  }
  @keyframes rotate-circle-preloader {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
