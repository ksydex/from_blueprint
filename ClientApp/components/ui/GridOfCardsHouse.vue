<template>
  <div class="grid"
       v-if="houses.length > 0">
    <CardHouse v-for="house in houses"
               :key="house.id"
               :background="cardsBackground"
               :house="house"/>
  </div>
</template>

<script>
  import CardHouse from './CardHouse'

  export default {
    props: {
      houses: {
        type: Array,
        default: () => []
      },
      cardsBackground: String
    },
    components: { CardHouse }
  }
</script>

<style scoped>
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
    grid-template-rows: repeat(auto-fit, minmax(200px, max-content));
    gap: var(--indent-3);
  }
</style>
