<template>
  <header class="header">
    <nav class="__nav">
      <Logo/>
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
  import Logo from '../utils/Logo'

  export default {
    components: {
      Logo
    },
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
    z-index: 100;
    box-shadow: 0 0 40px -22px var(--color-base-strong-down);
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
