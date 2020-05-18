<template>
  <footer class="wrapper">
    <div class="footer">
      <Logo color="var(--color-base-weak)"/>
      <div class="__info">
        <VText color="var(--color-base-weak)"
               type="caption">Лукьянов Артём, 2020. Все права защищены.
        </VText>
      </div>
    </div>
  </footer>
</template>

<style scoped>
  .footer {

  }
</style>
<script>
  import Logo from './utils/Logo'

  export default {
    components: { Logo }
  }
</script>

<style scoped
       lang="scss">
  .wrapper {
    background: var(--color-accent-strong);
  }

  .footer {
    max-width: var(--max-width);
    margin: 0 auto;
    padding: var(--indent-3) var(--indent-view-x);

    .__info {
      margin-top: var(--indent-2);
    }
  }
</style>
