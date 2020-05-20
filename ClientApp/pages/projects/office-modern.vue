<template>
  <VContainer>
    <div class="info">
      <div class="__text">
        <VText
          class="__title"
          type="title"
          weight="400">Офис для людей!
        </VText>
        <VText type="p"
               color="var(--color-base-strong-down)"
               :line-height="1.4">
          Идеология «Метриум» базируется на обеспечении высокого уровня комфорта клиентам в независимости от того, где
          они предпочитают совершить сделку – в центральном офисе компании, или же в офисе продаж на строительной
          площадке.
          <br><br>
          Крупные компании уже столкнулись с дефицитом больших офисных площадей: найти помещение площадью более 10 000
          м2 в столице очень сложно. Наличие собственного здания поможет им существенно сэкономить на собственной аренде
          и заработать, сдав излишки площадей в аренду сторонним фирмам. Продажа «лишних» помещений быстрее окупит
          вложения, однако стабильный и растущий доход обеспечивает только аренда.
        </VText>
      </div>
      <div class="__image"></div>
    </div>
  </VContainer>
</template>

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

      p {
        line-height: 1.2 !important;
      }
    }

    .__image {
      width: 40%;
      background-size: cover;
      background-position: center center;
      background-image: url("/images/office.jpg");
    }
  }
</style>
