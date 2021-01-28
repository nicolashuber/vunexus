<template>
  <div>
    <h2>Buttons</h2>
    <h4>Colors</h4>
    <v-btn v-for="(color, index) in colorSchema" :key="index" :color="color">
      Button {{ color }}
    </v-btn>

    <h4>Disabled</h4>
    <v-btn disabled>Button disabled</v-btn>

    <h4>Block</h4>
    <v-btn block>Button block</v-btn>

    <h4>Sizes</h4>
    <v-btn v-for="(size, index) in sizes" :key="index" :size="size">
      Button {{ size }}
    </v-btn>
  </div>
</template>

<script>
import VBtn from '@/components/elements/Btn.vue'

export default {
  components: {
    VBtn
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
