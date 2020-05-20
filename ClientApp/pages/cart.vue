<template>
  <VContainer>
    <template v-slot:title>Корзина</template>
    <div v-if="houses.length ===0"
         class="cart-empty">
      <VText type="h3"
             align="center"
             color="var(--color-base-strong-down)">Ваша корзина пуста!
      </VText>
      <VButton to="/houses">Перейти в магазин</VButton>
    </div>
    <div v-else
         class="cart">
      <div class="__items"
      >
        <div
          class="__item"
          v-for="house in houses"
          :key="house.id">
          <div :style="{backgroundImage: `url('${house.image}')`}"
               class="__image"></div>
          <div class="__inner">
            <div class="__item2 __info">
              <VText weight="600"
                     class="__name">{{house.name}}
              </VText>
              <VText color="var(--color-base-strong-down)">{{`${house.area} кв.м, ${house.floors}
                этажа(-ей)`}}
              </VText>
            </div>
            <div class="__price">
              <VText weight="600"
                     class="__item2">{{`$${house.price} USD`}}
              </VText>
              <VText @click="removeFromCart(house.id)"
                     class="__remove">Убрать
              </VText>
            </div>
          </div>
        </div>

      </div>
      <div
        class="__total">
        <VText type="title">Итог</VText>
        <hr class="__divider"/>
        <div class="__info">
          <VText
            v-for="item in info"
            :key="item"
            type="p"
            :line-height="1.4"
          >
            {{item}}
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
                type="caption">Размер скидки: ${{Math.floor(total * sale)}}
              </VText>
              <VText class="__price"
                     type="subtitle"
                     weight="600"
                     color="var(--color-accent-strong)">Итого: ${{total * (1 - sale)}}
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
        sale: 0.1,
        housesData: null
      }
    },
    methods: {
      removeFromCart(id) {
        this.$store.dispatch('cart/removeId', id)
      }
    },
    computed: {
      houses() {
        if (this.housesData) {
          const ids = this.$store.getters['cart/GET_IDS']
          return ids.map(id => this.housesData.filter(h => h.id === id)[0])
        }
        return []
      },
      total() {
        let price = 0
        this.houses.forEach(h => {
          price += h.price
        })
        return price
      },
      info() {
        return [
          `Всего позиций: ${this.houses.length}`,
          `Стоимость: $${this.total}`,
          `Скидка: ${this.sale * 100}%`
        ]
      }
    },
    async asyncData(ctx) {
      const ids = ctx.store.getters['cart/GET_IDS']
      let housesByIds = await ctx.$api.House.getByIds(ids)
      housesByIds = Array.isArray(housesByIds) ? housesByIds : [housesByIds]
      return {
        housesData: housesByIds
      }
    }
  }
</script>

<style scoped
       lang="scss">

  .cart-empty {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: var(--indent-4);
    background: var(--color-faint-weak);

    button {
      margin-top: var(--indent-2);
    }
  }

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
          width: 200px;
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
          padding: var(--indent-3);
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
            line-height: 1.3;

            .__name {
              margin-bottom: var(--indent-1);
            }
          }

          .__price {
            display: flex;
            flex-direction: column;
            align-items: flex-end;

            > .__item2 {
              margin-bottom: var(--indent-1);
            }

            @include for-size(mobile) {
              width: 100%;
              flex-direction: row;
              justify-content: space-between;
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
