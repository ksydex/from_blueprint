<template>
  <header class="header">
    <nav class="__nav">
      <div @click="isOpen = !isOpen"
           class="__burger">
        <VText
          type="p">
          <svg
            viewBox="0 0 32 17"
            width="20px"
            height="20px"
            xmlns="http://www.w3.org/2000/svg">
            <path :d="!isOpen ? 'M0 2h32M0 15h32' : 'M0 15L32 2M0 2l32 13'"
                  stroke="var(--color-base-strong)"
                  stroke-width="3"/>
          </svg>
        </VText>
      </div>
      <Logo class="__logo"/>
      <div>
        <ul class="__links"
            :style="{display: isOpen ? 'flex' : 'none'}">
          <li class="__link"
              @click="isOpen = !isMobile"
              v-for="link in links"
              :key="link.id">
            <VLink :to="link.to">
              <VText :class="{__text: true, '__text-current': currentLink && currentLink.id === link.id}"
                     type="p"
              >
                {{link.title}}
              </VText>
            </VLink>
          </li>
          <li @click="isOpen = !isMobile"
              class="__link">
            <VLink to="/cart">
              <VButton size="small">
                <div class="__cart">
                  Корзина
                  <div class="__size">{{cartSize}}</div>
                </div>
              </VButton>
            </VLink>

          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
  import Logo from '../../utils/Logo'

  export default {
    components: {
      Logo
    },
    data() {
      return {
        isOpen: true,
        isMobile: false
      }
    },
    computed: {
      links() {
        return this.$store.getters['nav/GET_LINKS']
      },
      currentLink() {
        const currentPath = this.$route.path
        return this.links.filter(l => l.to === currentPath)[0] || null
      },
      cartSize() {
        return this.$store.getters['cart/GET_IDS'].length
      }
    },
    mounted() {
      this.isMobile = screen.width < 700
      this.isOpen = !this.isMobile
    }
  }
</script>

<style
  lang="scss"
  src="./index.scss">
</style>
