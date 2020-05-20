<template>
  <div
    class="card"
    :style="{
    background
  }">
    <div class="__chips">
      <div v-if="house.isNew"
           class="__chip __new">
        Новинка
      </div>
      <div v-if="house.isCheap"
           class="__chip __cheap">
        Выгодно
      </div>
    </div>

    <div @click="pushToRoute"
         :style="{
      'background-image': `url('${house.image}')`
    }"
         class="__image">
    </div>
    <div class="__info">
      <VText
        @click="pushToRoute"
        class="__name"
        type="p">{{house.name}}
      </VText>
      <VText
        class="__meta"
        type="caption"
        color="var(--color-base-strong-down)">
        {{info.description}}
      </VText>
      <div class="__price">
        <VText type="subtitle"
               color="var(--color-accent-strong)">
          {{info.price}}
        </VText>
      </div>
      <ButtonAddToCart :id="house.id"/>
    </div>
  </div>
</template>

<script>
  import ButtonAddToCart from './ButtonAddToCart'

  export default {
    components: { ButtonAddToCart },
    methods: {
      pushToRoute() {
        this.$router.push('/houses/' + this.house.id)
      }
    },
    props: {
      background: {
        type: String,
        default: 'var(--color-base-weak)'
      },
      house: {
        type: Object,
        default: () => ({
          id: 1,
          name: 'Офисное здание',
          price: 15000,
          area: 300,
          floors: 4,
          image: '/images/home2.jpg'
        })
      }
    },
    computed: {
      isInCart() {
        return this.$store.getters['cart/GET_IDS'].includes(this.house.id)
      },
      info() {
        return {
          description: `${this.house.area} кв.м, ${this.house.floors} этажа(-ей)`,
          price: `$${this.house.price} USD`
        }
      }
    }
  }
</script>

<style lang="scss"
       scoped>
  .card {
    border-radius: var(--border-radius-base);
    overflow: hidden;
    cursor: pointer;
    position: relative;

    .__chips {
      position: absolute;
      z-index: 2;
      top: var(--indent-2);
      left: var(--indent-2);

      .__chip {
        padding: var(--indent-1) var(--indent-2);
        color: var(--color-base-weak);
        margin-bottom: var(--indent-1);
      }

      .__new {
        background: var(--color-error-strong);
      }

      .__cheap {
        background: var(--color-success-strong);
      }
    }

    .__image {
      position: relative;
      overflow: hidden;
      height: 170px;
      width: 100%;
      background-size: cover;
      background-position: center center;
    }


    .__info {
      border: solid var(--border-width) var(--color-faint-weak);
      border-radius: var(--border-radius-base);
      padding: var(--indent-2);
      border-top: none;
      border-top-right-radius: 0;
      border-top-left-radius: 0;
      height: 100%;

      .__meta, .__name, .__price {
        margin-bottom: var(--indent-1);
      }

      .__price {
        margin-bottom: var(--indent-2);
      }
    }

    &:hover {
      box-shadow: 0 10px 30px -25px var(--color-accent-strong-down);

      > .__info {
        border-color: var(--color-accent-strong-down);
      }
    }
  }
</style>
