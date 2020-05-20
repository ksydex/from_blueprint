<template>
  <div>
    <VButton @click="addToCart"
             :w100="w100"
             v-if="!isInCart"
             :size="size"
             class="__button">В корзину
    </VButton>
    <VButton @click="removeFromCart"
             v-else-if="isInCart"
             :w100="w100"
             text-color="var(--color-accent-strong)"
             class="button-in-cart"
             :size="size">
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
</template>

<script>
  export default {
    props: {
      id: {
        type: Number,
        required: true
      },
      w100: Boolean,
      size: String
    },
    methods: {
      addToCart() {
        this.$store.dispatch('cart/addId', this.id)
      },
      removeFromCart() {
        this.$store.dispatch('cart/removeId', this.id)
      }
    },
    computed: {
      isInCart() {
        return this.$store.getters['cart/GET_IDS'].includes(this.id)
      }
    }
  }
</script>

<style scoped
       lang="scss">
  .button-in-cart {
    background: var(--color-faint-weak) !important;
    border-color: var(--color-faint-weak) !important;

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
</style>
