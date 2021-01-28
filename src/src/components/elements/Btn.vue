<template>
  <button type="button" class="btn" :class="btnClasses">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'v-button',
  props: {
    size: {
      type: String,
      default: 'default'
    },
    color: {
      type: String,
      default: 'primary'
    },
    block: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    btnClasses () {
      return [
        `is-${this.size}`,
        `is-${this.color}`,
        { 'is-block': this.block },
        { 'is-disabled': this.disabled }
      ]
    }
  }
}
</script>
