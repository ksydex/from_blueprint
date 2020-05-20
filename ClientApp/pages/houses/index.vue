<template>
  <VContainer>
    <template v-slot:title>
      Наши предложения
    </template>
    <VText style="margin-top: var(--indent-2)"
           type="p">
      Есть идея? На странице
      <VLink to="/about">"О нас"</VLink>
      вы связаться с нами для обсуждения вашего проекта.
    </VText>
    <VContainer v-for="offer in offers"
                :key="offer.id"
                :default-header="false">
      <template v-slot:title>
        <VText
          type="h3">
          {{offer.title}}
        </VText>
      </template>
      <GridOfCardsHouse cards-background="var(--color-faint-weak)"
                        :houses="offer.houses"></GridOfCardsHouse>
    </VContainer>
  </VContainer>
</template>
<script>
  import GridOfCardsHouse from '../../components/ui/GridOfCardsHouse'

  export default {
    components: { GridOfCardsHouse },
    data() {
      return {
        lowPriceHouses: [],
        highPriceHouses: [],
        allHouses: []
      }
    },
    computed: {
      offers() {
        return [
          {
            id: 0,
            title: 'Самые выгодные предложения',
            houses: this.lowPriceHouses
          },
          {
            id: 1,
            title: 'Самые дорогие предложения',
            houses: this.highPriceHouses
          },
          {
            id: 2,
            title: 'Все предложения',
            houses: this.allHouses
          }
        ]
      }
    },
    async asyncData(ctx) {
      const [low, high, all] = await Promise.all(
        [
          ctx.$api.House.getWithFilter(true),
          ctx.$api.House.getWithFilter(false),
          ctx.$api.House.getAll()
        ])

      return {
        lowPriceHouses: low,
        highPriceHouses: high,
        allHouses: all
      }
    }
  }
</script>
