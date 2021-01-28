<template>
  <select
    v-bind="inputBinding"
    @input="input"
  >
    <option v-for="(option, index) in options" :key="index" :value="option[this.valueField]">
      {{ option[this.textField] }}
    </option>
  </select>
</template>

<script>
import props from './props';
import mixin from './mixin';

export default {
  name: 'v-select',
  props: {
    ...props,
    options: {
      type: Array,
      default () {
        return []
      }
    },
    modelValue: {
      type: [Number, String]
    },
    textField: {
      type: String,
      default: 'text'
    },
    valueField: {
      type: String,
      default: 'id'
    }
  },
  mixins: [mixin]
}
</script>
