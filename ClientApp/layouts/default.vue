<template>
  <div class="main">
    <div class="indent"></div>
    <NavBar/>
    <main>
      <nuxt/>
    </main>

  </div>
</template>

<script>
  import { NavBar } from '../components/'

  export default {
    components: {
      NavBar
    }
  }
</script>

<style scoped>
  main {
    max-width: var(--max-width);
    margin: 0 auto;
    padding: calc(var(--navbar-height)) var(--indent-view-x) 0 var(--indent-view-x);
  }
</style>
