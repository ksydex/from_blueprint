<template>
  <div>
    <VText v-if="caption"
           class="caption">{{caption}}
    </VText>
    <div class="container">
      <input
        :id="'input-' + this.$attrs.placeholder || 'input'"
        v-bind="$attrs"
        :type="type"
        class="input"
        :value="value"
        @input="handleInput($event.target.value)"
      />
      <slot name="after"></slot>
    </div>
  </div>
</template>
<script>
  export default {
    props: ['value', 'caption', 'type'],
    methods: {
      handleInput(value) {
        if (this.type === 'number') value = value.split(',').join('.')
        this.$emit('input', value)
      }
    }
  }
</script>

<style scoped>
  .caption {
    margin-bottom: var(--indent-1);
    color: var(--color-base-strong);
  }

  .input {
    user-select: auto !important;
  }

  .input[type='date']::-webkit-calendar-picker-indicator {
    background: none;
  }

  .container {
    display: flex;
  }

  .input {
    background: var(--color-base-weak);
    width: 100%;
    font-size: 16px;
    color: var(--color-base-strong-down);
    padding: var(--indent-1);
    box-sizing: border-box;
    border-radius: var(--border-radius-base);
    border-width: var(--border-width);
    border-color: var(--color-base-weak);
    border-style: solid;
  }

  .input:active,
  .input:focus {

    border-color: var(--color-accent-strong-down);
    background: var(--color-faint-weak);
    color: var(--color-base-strong);
  }
</style>
