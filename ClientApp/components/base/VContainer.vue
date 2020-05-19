<template>
  <div class="container">
    <div class="__title"
         v-if="defaultHeader === false">
      <slot name="title"></slot>
    </div>
    <div class="__title"
         v-else>
      <VText :align="centerHeader ? 'center' : ''"
             type="h1">
        <slot name="title"></slot>
      </VText>
    </div>
    <div class="__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      defaultHeader: {
        type: Boolean,
        default: true
      },
      centerHeader: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style lang="scss"
       scoped>
  .container {
    padding: var(--indent-3) 0;

    .__title {
      margin-bottom: var(--indent-3);
    }
  }
</style>
