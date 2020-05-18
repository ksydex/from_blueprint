<template>
  <div class="grid">
    <CardHouse></CardHouse>
    <CardHouse></CardHouse>
    <CardHouse></CardHouse>
    <CardHouse></CardHouse>
  </div>
</template>

<script>
  import CardHouse from './CardHouse'

  export default {
    components: { CardHouse }
  }
</script>

<style scoped>
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-template-rows: repeat(auto-fit, minmax(200px, max-content));
    gap: var(--indent-3);
  }
</style>
