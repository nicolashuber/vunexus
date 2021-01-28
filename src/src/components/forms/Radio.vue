<template>
  <div class="input-checkable">
    <input
      type="radio"
      class="input-checkable-input"
      :id="name"
      :value="modelValue"
      :checked="modelValue == value"
      @change="change"
    />
    <label class="input-checkable-label" :for="name">
      <slot />
    </label>
  </div>
</template>

<script>
export default {
  name: 'v-radio',
  props: {
    name:{
      type: String
    },
    label: {
      type: String
    },
    value: {
      type: [Number, String, Boolean]
    },
    modelValue: {
      type: [Number, String, Boolean]
    }
  },
  methods: {
    change (e) {
      if (e.target.checked) {
        this.$emit('update:modelValue', this.value);
      }
    }
  }
}
</script>
