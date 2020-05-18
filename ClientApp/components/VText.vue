<script>
  export default {
    props: {
      type: String,
      color: String
    },
    render(h) {
      const type = this.type

      let newType = types.filter(t => t.name.includes(type.toLowerCase()))[0] || null
      if (!newType) {
        console.warn(`Type "${type}" not exists. Using <p> instead`)
        newType = types[4]
      }


      return h('div', {}, [h(newType.tag, {
        attrs: {
          ...this.$attrs,
          class: newType.class,
          style: this.color && 'color: ' + this.color
        }
      }, this.$slots.default)])
    }
  }

  const types = [
    {
      name: ['header', 'h1'],
      tag: 'h1',
      class: 'text-header'
    },
    {
      name: ['subheader', 'h2'],
      tag: 'h2',
      class: 'text-subheader'
    },
    {
      name: ['title', 'h3'],
      tag: 'h3',
      class: 'text-title'
    },
    {
      name: ['subtitle', 'h4'],
      tag: 'h4',
      class: 'text-subtitle'
    },
    {
      name: ['paragraph', 'p'],
      tag: 'p',
      class: 'text-paragraph'
    },
    {
      name: ['caption'],
      tag: 'p',
      class: 'text-caption'
    }
  ]
</script>

<style>
  .text-header {
    font-weight: 700;
    font-size: 48px;
  }

  .text-subheader {
    font-weight: 600;
    font-size: 36px;
  }

  .text-title {
    font-weight: 500;
    font-size: 24px;
  }

  .text-subtitle {
    font-weight: 500;
    font-size: 20px;
  }

  .text-paragraph {
    font-weight: 500;
    font-size: 16px;
  }

  .text-caption {
    font-weight: 400;
    font-size: 14px;
  }
</style>
