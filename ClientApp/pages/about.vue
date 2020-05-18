<template>
  <div class="container">
    <VText class="__title"
           type="h1">
      FROM BLUEPRINT - Команда лучших
    </VText>
    <div class="__info">
      <div class="__p1">
        <VText>Мы успешно строим дома и не только уже 20 лет! В 2000х, начиная с малого бизнеса, мы выросли до
          уровня международной строительной компании.
        </VText>
        <VText>Сегодня, в 2020 году мы насчитываем более 3687 успешно завершенных проектов, начиная с частного дома и
          заканчивая строищейся башней в Москва Сити.
        </VText>

        <VText type="title">
          Наши офисы
        </VText>
        <ul class="__list">
          <li @mouseover="currentLocationId=loc.id"
              :class="{'__item': true, '__item-current': currentLocationId===loc.id}"
              v-for="loc in locations"
              :key="loc.id"
              :style="{background: loc.id === currentLocationId ? 'var(--color-faint-weak-up)': ''}">
            <VText color="var(--color-accent-strong)"
                   type="subtitle">{{loc.city}}
            </VText>
            <VText color="var(--color-base-strong-down)">{{loc.location}}
            </VText>
          </li>
        </ul>
      </div>
      <div class="__p2">
        <div class="__image"
             :style="{
          backgroundImage: `url('${locations[currentLocationId].image}')`
        }"></div>
      </div>


    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        currentLocationId: 0,
        locations: [
          {
            id: 0,
            city: 'San-Francisco',
            location: '200 McAllister St, San Francisco, CA 94102',
            image: '/images/location_sf.png'
          },
          {
            id: 1,
            city: 'Москва',
            location: '1-ый Меркурий Сити Тауэр, 1-й Красногвардейский пр-д, 15, 123100',
            image: '/images/location_mos.png'
          },
          {
            id: 2,
            city: 'Пенза',
            location: 'Улица Красная, 40, 440026',
            image: '/images/location_pnz.png'
          }
        ]
      }
    }
  }
</script>

<style scoped
       lang="scss">
  .container {
    padding: var(--indent-3) 0;

    .__info {
      margin-top: var(--indent-3);
      display: grid;
      grid-template-columns: 50% 50%;
      grid-gap: var(--indent-3);

      @include for-size(mobile) {
        grid-template-rows: repeat(auto-fit, max-content);
        grid-template-columns: 100%;
      }

      .__p1 {

        > div {
          margin-bottom: var(--indent-2);
        }

        .__list {
          .__item {
            padding: var(--indent-3);
            background: var(--color-faint-weak);
            cursor: pointer;
            position: relative;

            > div:first-child {
              margin-bottom: var(--indent-2);
            }

            margin-bottom: var(--indent-3);

            &:last-child {
              margin-bottom: 0;
            }
          }

          .__item-current {
            &:after {
              @include for-size(mobile) {
                display: none;
              }
              content: "";
              width: var(--indent-3);
              height: calc(2 * var(--border-width));
              background: var(--color-faint-weak-up);
              position: absolute;
              right: calc(-1 * var(--indent-3));
              top: 50%;
              bottom: 0;
            }
          }
        }
      }

      .__p2 {
        @include for-size(mobile) {
          height: 50vh;
        }

        .__image {
          height: 100%;
          background-position: center center;
        }
      }
    }
  }
</style>
