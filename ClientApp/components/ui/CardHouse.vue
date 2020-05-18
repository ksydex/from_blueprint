<template>
  <div class="card"
       :style="{
    background
  }">
    <div :style="{
      'background-image': `url('/images/home1.jpg')`
    }"
         class="__image">
    </div>
    <div class="__info">
      <VText class="__name"
             type="p">Финансовый офис, Румыния
      </VText>
      <VText
        class="__meta"
        type="caption"
        color="var(--color-base-strong-down)">
        5000 куб.м, 3 этажа
      </VText>
      <div class="__price">
        <VText type="subtitle"
               color="var(--color-accent-strong)">
          $15.000 USD
        </VText>
      </div>

      <VButton size="small"
               class="__button">В корзину
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
    }
  }
</style>
