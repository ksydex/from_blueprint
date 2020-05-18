<template>
  <div class="main">
    <div class="indent"></div>
    <NavBar/>
    <main>
      <nuxt/>
    </main>

    <VFooter/>
  </div>
</template>

<script>
  import { NavBar } from '../components/'
  import VFooter from '../components/VFooter'

  export default {
    components: {
      VFooter,
      NavBar
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
