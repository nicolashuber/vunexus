<template>
  <div class="input-checkable">
    <input
      type="checkbox"
      class="input-checkable-input"
      :id="name"
      :value="modelValue"
      :checked="isChecked"
      @change="change"
    />
    <label class="input-checkable-label" :for="name">
      <slot />
    </label>
  </div>
</template>

<script>
import { v1 as uuid } from 'uuid';

export default {
  name: 'v-checkbox',
  props: {
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
  data () {
    return {
      name: null,
    }
  },
  mounted () {
    this.name = uuid();
  },
  computed: {
    isChecked () {
      if (Array.isArray(this.modelValue)) {
        return this.modelValue.indexOf(this.value) > -1;
      }

      return this.value == this.modelValue;
    }
  },
  methods: {
    change (e) {
      let value = this.value;
      let isArray = Array.isArray(this.modelValue);

      if (e.target.checked) {
        if (isArray) {
          value = [...this.modelValue];
          value.push(this.value);
        }
      } else {
        value = null;

        if (isArray) {
          value = [...this.modelValue];
          let index = this.modelValue.findIndex(item => item == this.value);

          if (index > -1) {
            value.splice(index, 1);
          }
        }
      }

      this.$emit('update:modelValue', value);
    }
  }
}
</script>
