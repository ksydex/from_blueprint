<template>
  <VContainer>
    <template v-slot:title>Корзина</template>

    <div class="cart">
      <div class="__items">
        <div class="__item">
          <div :style="{backgroundImage: `url('/images/home1.jpg')`}"
               class="__image"></div>
          <div class="__inner">
            <div class="__item2 __info">
              <VText weight="600"
                     class="__name">Дом огромный
              </VText>
              <VText color="var(--color-base-strong-down)">Сколько то м3, 5 этажей</VText>
            </div>
            <div class="__price">
              <VText class="__item2">$25.000</VText>
              <VInput value="1"
                      class="__item2 __amount"></VInput>
              <VText class="__item2"
                     weight="600">$50.000
              </VText>
            </div>
            <VText class="__remove">Убрать</VText>
          </div>
        </div>
        <div class="__item">
          <div :style="{backgroundImage: `url('/images/home1.jpg')`}"
               class="__image"></div>
          <div class="__inner">
            <div class="__item2 __info">
              <VText weight="600"
                     class="__name">Дом огромный
              </VText>
              <VText color="var(--color-base-strong-down)">Сколько то м3, 5 этажей</VText>
            </div>
            <div class="__price">
              <VText class="__item2">$25.000</VText>
              <VInput value="1"
                      class="__item2 __amount"></VInput>
              <VText class="__item2"
                     weight="600">$50.000
              </VText>
            </div>
            <VText class="__remove">Убрать</VText>
          </div>
        </div>
        <div class="__item">
          <div :style="{backgroundImage: `url('/images/home1.jpg')`}"
               class="__image"></div>
          <div class="__inner">
            <div class="__item2 __info">
              <VText weight="600"
                     class="__name">Дом огромный
              </VText>
              <VText color="var(--color-base-strong-down)">Сколько то м3, 5 этажей</VText>
            </div>
            <div class="__price">
              <VText class="__item2">$25.000</VText>
              <VInput value="1"
                      class="__item2 __amount"></VInput>
              <VText class="__item2"
                     weight="600">$50.000
              </VText>
            </div>
            <VText class="__remove">Убрать</VText>
          </div>
        </div>
      </div>
      <div class="__total">
        <VText type="title">Итог</VText>
        <hr class="__divider"/>
        <div class="__info">
          <VText
            v-for="(item, idx) in info"
            :key="item"
            :class="{__item: idx !== info.length-1}"
            type="p">{{item}}
          </VText>
          <div class="__promo">
            <div class="__line"></div>
            <VInput
              style="width: 100%"
              placeholder="Введите его сюда!"
              caption="😎 Есть промокод?">
              <template v-slot:after>
                <VButton size="small"
                         style="margin-left: var(--indent-2)"><span
                  style="font-size: 30px; line-height: 0.1"
                >&rarr;</span></VButton>
              </template>
            </VInput>
          </div>
        </div>
        <hr class="__divider"/>
        <div class="__total2">
          <div class="__inner">
            <div>
              <VText
                weight="500"
                type="caption">Размер скидки: ${{total * sale/100}}
              </VText>
              <VText class="__price"
                     type="title"
                     color="var(--color-accent-strong)">Итого: ${{total * (1 - sale/100)}}
              </VText>
            </div>
            <VButton>Заказать</VButton>
          </div>
        </div>
      </div>
    </div>
  </VContainer>
</template>

<script>
  export default {
    data() {
      return {
        sale: 10
      }
    },
    computed: {
      ids() {
        return this.$store.getters['cart/GET_IDS']
      },
      total() {
        return this.ids.length * 23.2
      },
      info() {
        return [
          `Всего позиций: ${this.ids.length}`,
          `Стоимость: $${this.total}`,
          `Скидка: ${this.sale}%`
        ]
      }
    },

  }
</script>

<style scoped
       lang="scss">
  .cart {
    display: grid;
    grid-template-columns: 65% auto;
    grid-gap: var(--indent-3);

    @include for-size(mobile) {
      grid-template-columns: none;
      grid-template-rows: auto auto;
      grid-gap: var(--indent-2);
    }

    .__items, .__total {
      padding: var(--indent-3);
    }

    .__items {
      background: var(--color-faint-weak);

      .__item {
        background: var(--color-faint-weak-up);
        display: flex;
        margin-bottom: var(--indent-2);

        &:hover {
          box-shadow: 0 10px 40px -20px var(--color-faint-strong-down);
        }

        &:last-child {
          margin-bottom: 0;
        }

        @include for-size(mobile) {
          flex-direction: column;
        }

        .__image {
          width: 150px;
          height: 100px;
          background-size: cover;
          background-position: center center;

          @include for-size(mobile) {
            width: 100%;
            height: 200px;
          }
        }

        .__inner {
          width: 100%;
          display: flex;
          justify-content: space-between;
          padding: var(--indent-2);
          align-items: center;
          flex-wrap: wrap;

          @include for-size(mobile) {
            flex-direction: column;
            align-items: flex-start;

            .__item2 {
              margin-bottom: var(--indent-1);
            }
          }

          .__info {
            .__name {
              margin-bottom: var(--indent-1);
            }
          }

          .__price {
            display: flex;
            justify-content: space-around;
            align-items: center;

            @include for-size(mobile) {
              width: 100%;
              justify-content: space-between;
            }

            .__amount {
              width: 30px;
              display: flex;
              align-items: center;
              margin: 0 var(--indent-2);
            }
          }

          .__remove {
            color: var(--color-base-strong-down);

            &:hover {
              color: var(--color-accent-strong);
              cursor: pointer;
            }
          }
        }
      }
    }

    .__total {
      background: var(--color-faint-weak-up);

      .__divider {
        margin: var(--indent-2) 0;
        border-color: var(--color-faint-strong-down);
        border-style: solid;
        height: var(--border-width);
        border-width: calc(var(--border-width) / 2);
      }

      .__info {
        margin-bottom: var(--indent-2);
        color: var(--color-base-strong-down);

        .__item {
          margin-bottom: var(--indent-1);
        }

        .__item:last-of-type {
          margin-bottom: 0 !important;
        }

        .__promo {
          padding-top: var(--indent-2);
          background: var(--color-faint-weak-up);
          display: flex;

          .__line {
            margin-right: var(--indent-2);
            width: var(--border-width);
            background: var(--color-accent-strong);;

          }
        }
      }

      .__total2 {
        padding: 0;
        display: flex;
        justify-content: flex-end;

        .__inner {
          white-space: nowrap;
          width: min-content;
          text-align: right;
          display: flex;

          .__price {
            margin-top: var(--indent-1);
          }

          button {
            margin-left: var(--indent-2);
          }
        }
      }
    }

    .item {

    }
  }
</style>
