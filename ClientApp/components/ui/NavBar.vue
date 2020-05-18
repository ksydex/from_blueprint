<template>
  <header class="header">
    <nav class="__nav">
      <VLink to="/">
        <div class="__logo">
          <VText
            class="__text"
            type="p">
            FROM
          </VText>
          <div class="__svg">
            <svg
              viewBox="0 0 40 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M8 17.5L9.5 21h29l-7-20H2l4 11 7.5-7.5 4.75 4.75m0 0V6.5H21V12m-2.75-2.75L21 12m0 0l4 4m-13.5-3v4h4v-4h-4z"
                    stroke="#000"
                    stroke-width="1.5"/>
            </svg>
          </div>
          <VText
            class="__text"
            type="p">BLUEPRINT
          </VText>
        </div>
      </VLink>

      <div>
        <ul class="__links">
          <li class="__link"
              v-for="link in links"
              :key="link.id">
            <VLink :to="link.to">
              <VText :class="{__text: true, '__text-current': currentLink.id === link.id}"
                     type="p"
              >
                {{link.title}}
              </VText>
            </VLink>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
  export default {
    computed: {
      links() {
        return this.$store.getters['nav/GET_LINKS']
      },
      currentLink() {
        const currentPath = this.$route.path
        return this.links.filter(l => l.to === currentPath)[0]
      }
    }
  }
</script>

<style scoped
       lang="scss">
  .header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: var(--navbar-height);
    border-bottom: var(--border-width) solid var(--color-faint-weak);
    background: var(--color-base-weak);

    .__nav {
      margin: 0 auto;
      max-width: var(--max-width);
      display: flex;
      align-items: center;
      padding: 0 var(--indent-2);
      height: 100%;
      justify-content: space-between;

      .__logo {
        display: flex;
        height: 100%;
        align-items: center;
        text-decoration: none;

        .__text p {
          font-weight: 600;
        }

        .__svg svg path, .__text {
          color: var(--color-accent-strong) !important;
          stroke: var(--color-accent-strong);
          font-weight: 500;
        }

        .__svg svg {
          height: 25px;
          margin: 0 var(--indent-1);
        }
      }


      .__links {
        display: flex;

        .__link {
          margin-right: var(--indent-2);

          .__text {
            font-weight: 500 !important;
            color: var(--color-base-strong);

            &:hover, &:active, &:focus {
              color: var(--color-accent-strong)
            }
          }

          .__text-current {
            color: var(--color-accent-strong);
          }
        }
      }
    }
  }


</style>
