<template>
  <div>
    <h2>Buttons</h2>
    <btn v-for="(color, index) in colorSchema" :key="index" :color="color" />

    <h4>Disabled</h4>
    <btn disabled />

    <h4>Block</h4>
    <btn block />

    <h4>Sizes</h4>
    <btn v-for="(size, index) in sizes" :key="index" :size="size" />
  </div>
</template>

<script>
import Btn from './components/Btn.vue'

export default {
  name: 'App',
  components: {
    Btn
  },
  data () {
    return {
      sizes: [
        'small',
        'default',
        'medium',
        'large'
      ],
      colorSchema: [
        'primary',
        'info',
        'success',
        'warning',
        'danger',
        'dark'
      ]
    }
  }
}
</script>
