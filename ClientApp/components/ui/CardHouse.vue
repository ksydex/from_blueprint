<template>
  <div class="card"
       :style="{
    background
  }">
    <div :style="{
      'background-image': `url('${house.image}')`
    }"
         class="__image">
    </div>
    <div class="__info">
      <VText class="__name"
             type="p">{{house.name}}, <span style="color: var(--color-base-strong-down)">{{house.country}}</span>
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
      <VButton @click="addToCart"
               v-if="!isInCart"
               size="small"
               class="__button">В корзину
      </VButton>
      <VButton @click="removeFromCart"
               v-else-if="isInCart"
               text-color="var(--color-accent-strong)"
               class="__button-in-cart"
               size="small">
        <svg width="18"
             height="14"
             fill="none"
             xmlns="http://www.w3.org/2000/svg">
          <path d="M6 11.2L1.8 7 .4 8.4 6 14 18 2 16.6.6 6 11.2z"
          />
        </svg>
        В корзине
      </VButton>
    </div>
  </div>
</template>

<script>
  export default {
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
          country: 'Румыния',
          price: 15000,
          area: 300,
          floors: 4,
          image: '/images/home2.jpg'
        })
      }
    },
    methods: {
      addToCart() {
        this.$store.dispatch('cart/addId', this.house.id)
      },
      removeFromCart() {
        this.$store.dispatch('cart/removeId', this.house.id)
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
    .__image {
      position: relative;
      overflow: hidden;
      height: 170px;
      width: 100%;
      background-size: cover;
      background-position: center center;
    }

    &:hover {
      box-shadow: 0 10px 50px -25px var(--color-base-strong-down);
    }

    .__info {
      padding: var(--indent-2);

      .__meta, .__name, .__price {
        margin-bottom: var(--indent-1);
      }

      .__price {
        margin-bottom: var(--indent-2);
      }

      .__button-in-cart {
        background: var(--color-faint-weak);
        border-color: var(--color-faint-weak);

        div p {
          color: var(--color-accent-strong) !important;
        }

        &:hover {
          background: var(--color-faint-weak-up);
          border-color: var(--color-faint-weak-up);
        }

        svg {
          margin-right: var(--indent-1);

          path {
            fill: var(--color-accent-strong);
          }
        }
      }
    }
  }
</style>
