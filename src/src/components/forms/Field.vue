<template>
  <div class="field" :class="fieldClasses">
    <label v-if="label" class="field-label">{{ label }}</label>
    <slot />
    <div v-if="help" class="field-help">
      {{ help }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    help: {
      type: String
    },
    label: {
      type: String
    },
    state: {
      type: String
    }
  },
  computed: {
    fieldClasses () {
      return [
        this.state ? 'is-' + this.state : '',
      ]
    }
  }
}
</script>
