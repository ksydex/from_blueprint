<template>
  <VContainer>
    <template v-slot:title>
      Наши проекты
    </template>
    <div class="projects">
      <div v-for="project in projects"
           :key="project.id"
           class="__project"
           :style="{background: `url('${project.image}')`}">
        <div class="__inner">
          <div class="__info">
            <VText
              class="__title"
              color="var(--color-base-weak)"
              type="h2">{{project.title}}
            </VText>
            <VText type="subtitle"
                   color="var(--color-base-weak)"
                   weight="400"
                   :line-height="1.3"
                   class="__desc">
              {{project.description}}
            </VText>

            <div class="__more">
              <VLink
                :to="project.to">
                <VText color="var(--color-base-weak)"
                       type="p">Узнать подробнее
                </VText>
              </VLink>
            </div>
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
        projects: [
          {
            id: 0,
            title: 'Модульный дом',
            description: 'Самый технологичный из наших проектов. Конструктором дома являетесь вы, все зависит от ваших творческих способностей! Благодаря последним технологиям постройки, на полное создание проекта уходит всего лишь несколько дней!',
            image: '/images/home2.jpg',
            to: '/projects/module-home'
          },
          {
            id: 1,
            title: 'Офис WModern',
            description: 'Офис для прогрессивной компании, который покрывает все возможные кейсы. Встроенный wifi в стены, лучший на рынке "кабель менеджмент", 2 балкона для отдыха, лоджия и огромная кухня. Всё для работников!',
            image: '/images/office.jpg',
            to: '/projects/office-modern'
          }
        ]
      }
    }
  }
</script>

<style scoped
       lang="scss">
  .projects {
    display: grid;
    grid-template-rows: auto auto;
    grid-gap: var(--indent-3);

    .__project {
      background-position: center center !important;
      background-size: cover !important;

      &:hover {
        box-shadow: 0 10px 50px -20px var(--color-base-strong-down);
        transform: translateY(-3px);
      }

      .__inner {
        padding: var(--indent-4);
        background: linear-gradient(90deg, var(--color-base-strong), #2D313822);

        @include for-size(mobile) {
          padding: var(--indent-3);
        }

        .__info {
          max-width: 50%;

          @include for-size(mobile) {
            max-width: 100%;
          }

          .__title {
            margin-bottom: var(--indent-3);
          }

          .__more {
            margin-top: var(--indent-3);
            background: #ffffff33;
            text-transform: uppercase;
            width: fit-content;
            padding: var(--indent-2);
            position: relative;

            p {
              color: var(--color-base-weak);
            }

            &:hover {
              background: #ffffff77;
              cursor: pointer;
            }
          }
        }
      }
    }
  }
</style>
