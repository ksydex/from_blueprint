<template>
  <div class="part part-2">

    <VText v-if="!hide"
           type="h2"
           align="center"
           weight="400">
      Постройка дома не должна быть сложной!
    </VText>
    <div class="__content">
      <EffectGrid top="-40px"
                  left="10px"
                  class="__effect"></EffectGrid>
      <EffectGrid bottom="-60px"
                  right="40px"
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
                 type="p">Лучший в мире модульный дом оснащен системой умного отополения, слежения и климата. Его
            можно
            построить где угодно, даже в возудхе! Всё зависит от вашей фантазии. Цена стартует от всего лишь
            $20000 - успейте забрать!
          </VText>
          <VText
            v-if="hide"
            class="__p"
            type="p">Благодаря разработанной нам системе, этот дом может быть как 2х этажным, так и скольки угодно.
            Модули можно с легкостью обновлять и заменять, если их срок вышел, или произошли неполадки.
          </VText>
          <div class="__more"
               v-if="!hide">
            <VLink
              to="/projects">
              <VText type="p">Узнать подробнее</VText>
            </VLink>
          </div>
          <div class="__more"
               v-else>
            <VLink
              to="/houses/3">
              <VText type="p">Перейти к покупке</VText>
            </VLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import EffectGrid from '../EffectGrid'

  export default {
    props: {
      hide: {
        type: Boolean,
        default: false
      }
    },
    components: { EffectGrid }
  }
</script>

<style scoped
       lang="scss">
  .part-2 {
    .__content {
      display: flex;
      justify-content: space-around;
      margin-top: var(--indent-4);
      height: 50vh;
      position: relative;

      @include for-size(mobile) {
        height: fit-content;
        flex-direction: column;
      }


      .__left {
        position: relative;
        overflow: hidden;
        width: 40%;

        @include for-size(mobile) {
          width: 100%;
          height: 30vh;

          .__image {
            left: 0 !important;
            right: 0;
            top: -30%;
          }
        }


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

        @include for-size(mobile) {
          width: 100%;
          max-width: 100%;
          margin-top: var(--indent-3);
        }


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
</style>
