<template>
  <textarea
    v-bind="inputBinding"
    @input="input"
  />
</template>

<script>
import props from './props';
import mixin from './mixin';

export default {
  name: 'v-textarea',
  props: {
    ...props,
    modelValue: {
      type: [Number, String]
    },
  },
  mixins: [mixin]
}
</script>
