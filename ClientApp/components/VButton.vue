<template>
  <button @click="handleClick"
          :style="{
    padding: indents[size]
  }"
          class="button">
    <VText :color="textColor"
           :type="textType">
      <slot></slot>
    </VText>
  </button>
</template>

<script>
  export default {
    props: {
      to: String,
      textType: {
        type: String,
        default: 'p'
      },
      textColor: {
        type: String,
        default: 'var(--color-base-weak)'
      },
      color: {
        type: String,
        default: 'var(--color-accent-strong)'
      },
      size: {
        type: String,
        default: 'default'
      }
    },
    data() {
      return {
        indents: {
          small: 'var(--indent-1) var(--indent-2)',
          default: 'var(--indent-2) var(--indent-3)',
          big: 'var(--indent 3) var(--indent-4)'
        }
      }
    },
    methods: {
      handleClick() {
        if (this.to) this.$router.push(this.to)
        else this.$emit('click')
      }
    }
  }
</script>

<style scoped>
  .button {
    letter-spacing: 0.7px;
    background: var(--color-accent-strong);
    border: solid var(--border-width);
    border-color: var(--color-accent-strong);
    border-radius: var(--border-radius-base);
  }

  .button:hover {
    background: var(--color-accent-strong-down);
    border-color: var(--color-accent-strong-down);
  }

  .button:active, .button:focus {
    background: var(--color-accent-strong-down);
    border: solid var(--border-width);
    border-color: var(--color-accent-weak);
  }
</style>
