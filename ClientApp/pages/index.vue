<template>
  <div class="container">
    <div class="part part-1">
      <div class="__bg">r</div>
      <EffectGrid bottom="-50px"
                  right="-30px"></EffectGrid>
      <div class="__left">
        <div>
          <VText
            class="__title"
            color="var(--color-accent-strong)"
            type="header">
            Используем новые технологии при строительстве
          </VText>
          <VText class="__desc"
                 type="p"
                 color="var(--color-base-strong-down)">
            Передовые технологии мировых лидеров по производству строительных материалов
          </VText>
        </div>

        <div>
          <VButton class="__button">Подробнее
            <span
              style="font-size: 21px; line-height: 0.2"
            >&rarr;</span></VButton>
          <VText
            class="__caption"
            type="caption"
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


    <ModuleHouse></ModuleHouse>


    <div class="part part-3">
      <div class="__content">
        <VText
          class="__caption"
          type="caption"
          transform="uppercase"
          color="var(--color-faint-strong-down)">Как мы работаем
        </VText>
        <div class="__desc">
          <VText
            class="__title"
            type="title"
            weight="400">
            Работаем без задержек и отговорок
          </VText>
          <VText class="__subdesc"
                 type="p"

                 color="var(--color-base-strong-down)">Благодаря четко сформированному плану, мы начинаем и заканчиваем
            строительство строго
            вовремя. Нет и не может быть никаких задержек!
          </VText>
        </div>
        <div class="__stages"
             style="position: relative">
          <EffectGrid bottom="-60px"
                      left="-60px"
                      class="__effect"></EffectGrid>
          <div class="__stage"
               v-for="(stage, idx) in stages"
               :key="stage.id">
            <VText
              class="__num">{{'0' +(idx+1)}}
            </VText>
            <VText class="__stage-title"
                   weight="600"
                   type="subtitle">{{stage.title}}
            </VText>
            <VText
              weight="400"
              type="p">{{stage.desc}}
            </VText>
          </div>
        </div>
      </div>
    </div>

    <div class="part-4 part"
         style="position: relative">
      <div class="__bg"></div>
      <EffectGrid bottom="-30px"
                  right="-40px"
                  class="__effect"></EffectGrid>
      <VText type="h2"
             align="center"
             weight="400">
        Наши дома по скидке
      </VText>
      <div class="__content">
        <GridOfCardsHouse :houses="housesOnSale"/>
      </div>
    </div>
  </div>
</template>

<script>
  import { CardHouse, EffectGrid, GridOfCardsHouse } from '../components/'
  import ModuleHouse from '../components/containers/ModuleHouse'

  export default {
    components: { ModuleHouse, GridOfCardsHouse, EffectGrid, CardHouse },
    data() {
      return {
        housesOnSale: [],
        stages: [
          {
            id: 0,
            title: '01 Планируем',
            desc: 'Разрабатываем смету, чертеж строения, план закупки материалов, договариваемся с поставщиками на минимальные цены.'
          },
          {
            id: 1,
            title: '02 Строим',
            desc: 'Закупаем материалы, подготавливаем землю для постройки, строим здание.'
          },
          {
            id: 3,
            title: '03 Продаем',
            desc: 'Убеждаемся в качестве построенного здания чтобы далее выдать его своему владельцу.'
          }
        ]
      }
    },
    async asyncData(ctx) {
      const houses = await ctx.$api.House.getByIds([2, 4, 7])
      return {
        housesOnSale: houses
      }
    }
  }
</script>

<style lang="scss">
  .part {
    margin-bottom: var(--indent-5) !important;

    @include for-size(mobile) {
      height: fit-content;
    }
  }

  .__bg {
    background: var(--color-faint-weak);
    position: absolute;
    top: 0;
    left: -50vw;
    right: -50vw;
    z-index: -100;
    height: 100%;
    bottom: 0;
    overflow: hidden;
  }

  .part-1 {
    position: relative;
    display: grid;
    column-gap: var(--indent-2);
    grid-template-columns: 50fr 50fr;
    grid-template-rows: repeat(auto-fit, minmax(50vh, max-content));
    background: var(--color-faint-weak);
    margin: 0 calc(-1 * var(--indent-view-x));


    @include for-size(desktop) {
      height: 50vh;
    }

    @include for-size(mobile) {
      padding-top: var(--indent-2);
    }

    .__left {
      padding: 0 var(--indent-view-x);
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

      .__desc {
        margin-bottom: var(--indent-2);
      }

      .__button {
        margin-bottom: var(--indent-view-x);
        box-shadow: 0 10px 30px -10px var(--color-accent-strong-down);
      }

      .__caption {
        margin-bottom: var(--indent-3);
      }
    }

    .__right {
      position: relative;
      overflow: hidden;

      img {
        position: absolute;
        top: 0;
        height: 50vh;
        left: -20%;
      }
    }
  }


  .part-3 {
    display: flex;
    justify-content: center;

    .__content {
      width: 90%;

      .__desc {
        margin-top: var(--indent-2);
        display: flex;
        justify-content: space-between;
        color: var(--color);

        .__title {
          width: 40%;
        }

        .__subdesc {
          width: 50%;
        }
      }

      .__stages {
        margin-top: var(--indent-4);
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        grid-template-rows: repeat(auto-fit, minmax(200px, max-content));
        gap: var(--indent-3);

        .__stage {
          border: solid var(--border-width) var(--color-faint-weak-up);
          padding: var(--indent-3);
          overflow: hidden;
          position: relative;
          padding-top: 75px;
          border-radius: var(--border-radius-base);

          &:hover {
            background: var(--color-accent-strong);
            border-color: var(--color-accent-strong);
            box-shadow: 0 10px 50px -10px var(--color-accent-strong-down);
            cursor: pointer;

            .__num p {
              color: #ffffff44;
            }

            p, h4 {
              color: var(--color-base-weak);
            }
          }


          .__stage-title {
            margin-bottom: var(--indent-2);
            color: var(--color-accent-strong);
          }

          .__num p {
            position: absolute;
            top: -25px;
            left: -20px;
            color: var(--color-faint-weak-up);
            font-size: 90px;
            font-weight: 700 !important;
          }
        }
      }
    }
  }

  .part-4 {
    position: relative;
    padding: var(--indent-4) 0;

    .__content {
      margin-top: var(--indent-3);

    }
  }
</style>
