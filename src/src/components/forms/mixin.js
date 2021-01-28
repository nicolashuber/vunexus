export default {
  data () {
    return {
      newValue: ''
    }
  },
  computed: {
    inputClasses () {
      return [
        'input',
        `is-${this.size}`
      ]
    },

    inputBinding () {
      return {
        name: this.name,
        value: this.modelValue,
        class: this.inputClasses,
        disabled: this.disabled,
        placeholder: this.placeholder,
      }
    }
  },
  methods: {
    input (e) {
      this.$emit('update:modelValue', e.target.value)
    }
  }
}
