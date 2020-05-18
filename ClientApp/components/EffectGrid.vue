<template>
  <svg class="effect"
       :style="{
          top: top,
          left: left,
          bottom: bottom,
          right: right
       }"
       width="74"
       height="92"
       fill="none"
       xmlns="http://www.w3.org/2000/svg">
    <rect width="2"
          height="2"
          rx="1"
          :fill="color"/>
    <rect y="18"
          width="2"
          height="2"
          rx="1"
          :fill="color"/>
    <rect y="36"
          width="2"
          height="2"
          rx="1"
          :fill="color"/>
    <rect y="54"
          width="2"
          height="2"
          rx="1"
          :fill="color"/>
    <rect y="72"
          width="2"
          height="2"
          rx="1"
          :fill="color"/>
    <rect y="90"
          width="2"
          height="2"
          rx="1"
          :fill="color"/>
    <rect x="18"
          width="2"
          height="2"
          rx="1"
          :fill="color"/>
    <rect x="18"
          y="18"
          width="2"
          height="2"
          rx="1"
          :fill="color"/>
    <rect x="18"
          y="36"
          width="2"
          height="2"
          rx="1"
          :fill="color"/>
    <rect x="18"
          y="54"
          width="2"
          height="2"
          rx="1"
          :fill="color"/>
    <rect x="18"
          y="72"
          width="2"
          height="2"
          rx="1"
          :fill="color"/>
    <rect x="18"
          y="90"
          width="2"
          height="2"
          rx="1"
          :fill="color"/>
    <rect x="36"
          width="2"
          height="2"
          rx="1"
          :fill="color"/>
    <rect x="36"
          y="18"
          width="2"
          height="2"
          rx="1"
          :fill="color"/>
    <rect x="36"
          y="36"
          width="2"
          height="2"
          rx="1"
          :fill="color"/>
    <rect x="36"
          y="54"
          width="2"
          height="2"
          rx="1"
          :fill="color"/>
    <rect x="36"
          y="72"
          width="2"
          height="2"
          rx="1"
          :fill="color"/>
    <rect x="36"
          y="90"
          width="2"
          height="2"
          rx="1"
          :fill="color"/>
    <rect x="54"
          width="2"
          height="2"
          rx="1"
          :fill="color"/>
    <rect x="72"
          width="2"
          height="2"
          rx="1"
          :fill="color"/>
    <rect x="54"
          y="18"
          width="2"
          height="2"
          rx="1"
          :fill="color"/>
    <rect x="72"
          y="18"
          width="2"
          height="2"
          rx="1"
          :fill="color"/>
    <rect x="54"
          y="36"
          width="2"
          height="2"
          rx="1"
          :fill="color"/>
    <rect x="72"
          y="36"
          width="2"
          height="2"
          rx="1"
          :fill="color"/>
    <rect x="54"
          y="54"
          width="2"
          height="2"
          rx="1"
          :fill="color"/>
    <rect x="72"
          y="54"
          width="2"
          height="2"
          rx="1"
          :fill="color"/>
    <rect x="54"
          y="72"
          width="2"
          height="2"
          rx="1"
          :fill="color"/>
    <rect x="54"
          y="90"
          width="2"
          height="2"
          rx="1"
          :fill="color"/>
    <rect x="72"
          y="72"
          width="2"
          height="2"
          rx="1"
          :fill="color"/>
    <rect x="72"
          y="90"
          width="2"
          height="2"
          rx="1"
          :fill="color"/>
  </svg>
</template>

<script>
  export default {
    props: {
      color: {
        type: String,
        default: 'var(--color-accent-strong)'
      },
      top: {
        type: String,
        default: null
      },
      bottom: {
        type: String,
        default: null
      },
      left: {
        type: String,
        default: null
      },
      right: {
        type: String,
        default: null
      }
    }
  }
</script>


<style scoped>
  .effect {
    position: absolute;
    z-index: 10;
  }
</style>
