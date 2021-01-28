<template>
  <input
    type="text"
    v-bind="inputBinding"
    @input="input"
  />
</template>

<script>
import props from './props';
import mixin from './mixin';

export default {
  name: 'v-input',
  props: {
    ...props,
    modelValue: {
      type: [Number, String]
    },
  },
  mixins: [mixin]
}
</script>
