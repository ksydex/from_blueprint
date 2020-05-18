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
          <VText type="p"
                 color="var(--color-base-strong-down)">
            Передовые технологии мировых лидеров по производству строительных материалов
          </VText>
        </div>

        <div>
          <VButton class="__button">Подробнее
            <span
              style="font-size: 21px; line-height: 0.2"
            >&rarr;</span></VButton>
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
    <div class="part part-2">

      <VText type="h2"
             align="center"
             weight="400">
        Постройка дома не должна быть сложной!
      </VText>
      <div class="__content">
        <EffectGrid top="-40px"
                    left="10px"
                    class="__effect"></EffectGrid>
        <div class="__left">
          <img class="__image"
               alt="image2"
               src="/images/home2.jpg">
        </div>
        <div class="__right">
          <div class="__inner">
            <svg xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 298.67 298.67">
              <path d="M0 170.67h64L21.33 256h64L128 170.67v-128H0zM170.67 42.67v128h64L192 256h64l42.67-85.33v-128z"
              />
            </svg>
            <VText
              class="__title"
              type="title"
              weight="400">Добро пожаловать в наш самый иновационный дом.
            </VText>
            <VText class="__p"
                   type="p">Лучший дом в мире оснащен системой умного отополения, слежения и климата. Его можно
              построить где угодно, даже в возудхе! Всё зависит от вашей фантазии. Цена стартует от всего лишь
              $7.000.000 - успейте забрать!
            </VText>
            <div class="__more">
              <VLink
                to="/projects">
                <VText type="p">Узнать подробнее</VText>
              </VLink>
            </div>
          </div>
        </div>
      </div>
    </div>
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
        <div class="__stages">
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
  </div>
</template>

<script>
  import EffectGrid from '../components/EffectGrid'

  export default {
    components: { EffectGrid },
    data() {
      return {
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
    }
  }
</script>

<style lang="scss">

  .part {
    margin-bottom: var(--indent-5) !important;
  }

  .part-1 {
    position: relative;
    display: grid;
    column-gap: var(--indent-2);
    grid-template-columns: 50% 50%;
    height: 50vh;
    background: var(--color-faint-weak);
    margin: 0 calc(-1 * var(--indent-view-x));

    .__bg {
      background: var(--color-faint-weak);
      position: absolute;
      top: 0;
      right: -10000px;
      left: -10000px;
      z-index: -100;
      bottom: 0;
    }

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
        box-shadow: 0 10px 30px -10px var(--color-accent-strong-down);
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

  .part-2 {
    .__content {
      display: flex;
      justify-content: space-around;
      margin-top: var(--indent-4);
      height: 50vh;
      position: relative;


      .__left {
        position: relative;
        overflow: hidden;
        width: 40%;


        .__image {
          position: absolute;
          left: -50%;
          height: 50vh;
        }
      }

      .__right {
        max-width: 40%;
        display: flex;
        flex-direction: column;
        justify-content: center;

        .__inner {
          svg {
            margin-bottom: var(--indent-3);
            height: 30px;
            fill: var(--color-accent-strong);
          }

          .__title {
            margin-bottom: var(--indent-2);
          }

          .__p {
            color: var(--color-base-strong-down);
            line-height: 1.4;
            margin-bottom: var(--indent-3);
          }

          .__more {
            text-transform: uppercase;
            width: fit-content;
            margin-left: calc(-1 * var(--indent-2));
            padding: var(--indent-2);
            position: relative;

            p {
              color: var(--color-accent-strong);
            }

            &:hover {
              background: var(--color-accent-weak);
              cursor: pointer;
            }
          }
        }
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

</style>
