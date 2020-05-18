<template>
  <VLink to="/">
    <div class="__logo">
      <VText
        class="__text"
        :color="color"
        type="p">
        FROM
      </VText>
      <div class="__svg">
        <svg
          viewBox="0 0 40 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M8 17.5L9.5 21h29l-7-20H2l4 11 7.5-7.5 4.75 4.75m0 0V6.5H21V12m-2.75-2.75L21 12m0 0l4 4m-13.5-3v4h4v-4h-4z"
                :stroke="color"
                stroke-width="1.5"/>
        </svg>
      </div>
      <VText
        class="__text"
        :color="color"
        type="p">BLUEPRINT
      </VText>
    </div>
  </VLink>
</template>

<script>
  export default {
    props: {
      color: {
        type: String,
        default: 'var(--color-accent-strong)'
      }
    }
  }
</script>


<style scoped
       lang="scss">
  .__logo {
    display: flex;
    height: 100%;
    align-items: center;
    text-decoration: none;

    .__text p {
      font-weight: 600;
    }

    .__svg svg path, .__text {
      font-weight: 500;
    }

    .__svg svg {
      height: 25px;
      margin: 0 var(--indent-1);
    }

  }
</style>
