<template>
  <VContainer center-header>
    <template v-slot:title>
      <span style="color: var(--color-accent-strong)">FROM BLUEPRINT</span> - Команда лучших
    </template>

    <div class="__info">
      <div class="__p1">
        <VText>Мы успешно строим дома и не только уже 20 лет! В 2000х, начиная с малого бизнеса, мы выросли до
          уровня международной строительной компании.
        </VText>
        <VText>Сегодня, в 2020 году мы насчитываем более 3687 успешно завершенных проектов, начиная с частного дома и
          заканчивая строящейся башней в Москва Сити.
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
    <div class="__agents">
      <VText type="header"
             align="center"
             weight="400">Наши лучшие агенты
      </VText>
      <div class="__content">
        <div v-for="agent in agents"
             :key="agent.id"
             class="__agent">
          <div :style="{backgroundImage: `url('${agent.image}')`}"
               class="__image"></div>
          <div class="__inner">
            <VText class="__title"
                   type="subtitle">{{agent.name}}
            </VText>
            <VText class="__desc"
                   type="p">{{agent.desc}}
            </VText>
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
        agents: [
          {
            id: 0,
            name: 'Robert Bryson Hall II',
            desc: 'Наш ведущий агент. Знает всё, может помочь со всем. Если что звоните ему! \n Родился 22 января 1990 года в Rockville, Maryland. Также является известным под псевдонимом "Logic". Является репером, певцом, писателем, продюсером, автором, и много кем ещё.',
            image: '/images/logic.jpg'
          },
          {
            id: 1,
            name: 'Marshall Bruce Mathers III',
            desc: 'Наш агент отвественный за покупку земель. Знает от и до почему земля может быть хорошей или наоборот. \n Вырос в Detroit, Michigan, где до недавнего времени была очень плохая экономическая ситуация. Известен также как "Eminem".',
            image: '/images/eminem.jpg'
          },
          {
            id: 2,
            name: 'Gary Maurice Lucas, Jr.',
            desc: 'Агент ответсвенный за деловые встречи и переговоры. Может договориться на что угодно и с кем угодно. Ему доверяют! \n Родился 17 августа 1988 года в Worcester, Massachusetts. Долгое время был неизвестен, но с выходом альбома "ADHD" весь мир узнал, кто такой Joyner Lucas.',
            image: '/images/joyner.png'
          },
        ],
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
      margin: var(--indent-4) 0;
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

    .__agents {
      .__content {
        margin-top: var(--indent-3);
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        grid-template-rows: repeat(auto-fit, minmax(400px, max-content));
        grid-gap: var(--indent-3);

        .__agent {
          border: solid var(--color-faint-weak-up) var(--border-width);
          border-radius: var(--border-radius-base);

          &:hover {
            box-shadow: 0 20px 70px -30px var(--color-accent-strong-down);
            transform: translateY(-5px);
            border-color: var(--color-accent-strong);
          }

          .__image {
            background-size: cover;
            background-position: center top;
            height: 300px;

            &:hover {
              background-image: var(--hover-image);
            }
          }

          .__inner {
            padding: var(--indent-3);

            .__title {
              margin-bottom: var(--indent-2);
            }

            .__desc {
              color: var(--color-base-strong-down);
              white-space: pre-line;
            }
          }
        }
      }
    }
  }
</style>
