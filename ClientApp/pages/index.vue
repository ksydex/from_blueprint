<template>
  <div class="container">
    <div class="part-1">
      <div class="__left">
        <div>
          <VText
            class="__title"
            color="var(--color-accent-strong)"
            type="header">
            Используем новые технологии при строительстве
          </VText>
          <VText type="p"
                 color="var(--color-base-strong-down)">
            Передовые технологии мировых лидеров по производсту строительных материалов
          </VText>
        </div>

        <div>
          <VButton class="__button">Подробнее</VButton>
          <VText type="caption"
                 color="var(--color-faint-strong-down)">
            Условия сотрудничества и многое другое
          </VText>
        </div>
      </div>
      <div class="__right">
        <img alt="image"
             src="/images/home1.jpg">
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="scss">

  .part-1 {
    display: grid;
    column-gap: var(--indent-2);
    grid-template-columns: 50% 50%;
    height: 50vh;
    background: var(--color-faint-weak);
    margin: 0 calc(-1 * var(--indent-view-x));

    .__left {
      margin-left: var(--indent-view-x);
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      .__title {
        margin-bottom: var(--indent-view-x);

        h1 {
          font-weight: 400;
          line-height: 0.9;
        }
      }

      .__button {
        margin-bottom: var(--indent-view-x);
      }
    }

    .__right {
      position: relative;
      overflow: hidden;

      img {
        position: absolute;
        top: 0;
        height: 50vh;
        left: -30%;
      }
    }
  }

</style>
