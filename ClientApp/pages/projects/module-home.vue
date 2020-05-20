<template>
  <VContainer>
    <ModuleHouse :hide="true"></ModuleHouse>
    <div class="info">
      <div class="__text">
        <VText
          class="__title"
          type="title"
          weight="400">Лучшие материалы и технологии
        </VText>
        <VText type="p"
               color="var(--color-base-strong-down)"
               :line-height="1.4">
          Мы используем только высококачественные материалы, а также новейшие технологии. Большой популярностью
          пользуется не только Tikkurila, но и продукция марки Teknos «Чтобы там ни говорили, а краски у них выбор
          больше, чем у нас. Цены кусаются, иногда вообще дикие, но качество иной раз такое, что прям душа радуется.
          Шпаклевки вроде обычные акриловые, а когда наносишь шпателем, то сразу разницу чувствуешь, ну и главное, что
          они держат отлично!
        </VText>
      </div>
      <div class="__image"></div>
    </div>
  </VContainer>
</template>
<script>
  import ModuleHouse from '../../components/containers/ModuleHouse'

  export default {
    components: { ModuleHouse }
  }
</script>

<style lang="scss"
       scoped>
  .info {
    display: flex;
    justify-content: space-around;
    margin-top: var(--indent-4);
    height: 50vh;
    position: relative;

    @include for-size(mobile) {
      height: fit-content;
      flex-direction: column;
    }

    .__text {
      width: 40%;
      text-align: right;

      p {
        line-height: 1.2 !important;
      }
    }

    .__image {
      width: 40%;
      background-size: cover;
      background-position: center center;
      background-image: url("/images/module.jpg");
    }
  }
</style>
