<template>
  <n-link :to="to"
          class="link"
          v-bind="$attrs">
    <slot></slot>
  </n-link>
</template>

<script>
  export default {
    props: {
      to: String
    }
  }
</script>

<style scoped>
  .link {
    text-decoration: none;
    color: var(--color-accent-strong);
  }

  .link:hover, .link:active, .link:focus {
    outline: none;
  }
</style>
