<template>
  <div>
    <VContainer :default-header="false"
                v-if="house">
      <template v-slot:title>
        <VText class="__name"
               type="h3">
          {{house.name}}
        </VText>
      </template>
      <div class="house">
        <div class="__info">
          <VText color="var(--color-base-strong-down)"
                 class="__desc"
                 type="p">{{house.description}}
          </VText>
          <div class="__params">
            <VText style="margin-bottom: var(--indent-1)"
                   type="subtitle">Технические подробности
            </VText>
            <VText :line-height="1.5"
                   class="__param"
                   v-for="param in info"
                   :key="param.key">
              <span style="color: var(--color-base-strong-down)">{{param.key}}</span>
              <span>- {{param.value}}</span>
            </VText>
          </div>
          <div class="__buy">
            <ButtonAddToCart w100
                             :id="house.id"/>
            <VButton color="var(--color-base-weak)"
                     text-color="var(--color-accent-strong)"
                     w100>Купить в один клик
            </VButton>
          </div>
        </div>
        <div class="__image"
             :style="{backgroundImage: `url('${house.image}')`}"></div>
      </div>
    </VContainer>
  </div>
</template>

<script>
  import { ButtonAddToCart } from '../../components'

  export default {
    components: { ButtonAddToCart },
    data() {
      return {
        house: null
      }
    },
    computed: {
      info() {
        const house = this.house
        return house ? [
          { key: 'Площадь', value: house.area + ' квадратных метров' },
          { key: 'Количество этажей', value: house.floors }
        ] : []
      }
    },
    async asyncData(ctx) {
      const id = parseInt(ctx.route.params.id)
      const house = await ctx.$api.House.getById(id)
      return {
        house
      }

    }
  }
</script>

<style lang="scss"
       scoped>
  .house {
    display: grid;
    grid-template-columns: 48% 48%;
    justify-content: space-between;
    grid-gap: var(--indent-4);

    @include for-size(mobile) {
      grid-template-columns: none;
      grid-template-rows: auto auto;
      grid-gap: var(--indent-3);
    }

    .__info {

      .__name {
        margin-bottom: var(--indent-1);
      }

      .__desc {
        margin-bottom: var(--indent-2);
      }

      .__params {
        margin-bottom: var(--indent-4);

        .__param {
        }
      }

      .__buy {
        display: grid;
        grid-template-columns: 50% 50%;
        grid-gap: var(--indent-2);

        @include for-size(mobile) {
          grid-template-columns: 100%;
          grid-template-rows: auto auto;
        }

      }
    }

    .__image {
      background-position: center center;
      background-size: cover;
      height: 50vh;
    }
  }
</style>
