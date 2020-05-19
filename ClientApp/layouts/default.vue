<template>
  <div class="main">
    <div class="indent"></div>
    <VNav/>
    <main>
      <nuxt/>
    </main>

    <VFooter/>
  </div>
</template>

<script>
  import { VNav } from '../components/'
  import VFooter from '../components/base/VFooter'

  export default {
    components: {
      VFooter,
      VNav
    }
  }
</script>

<style scoped>
  .main {

    overflow-x: hidden;
    overflow-y: hidden;
  }

  main {
    max-width: var(--max-width);
    margin: 0 auto;
    padding: calc(var(--navbar-height)) var(--indent-view-x) 0 var(--indent-view-x);
  }
</style>
