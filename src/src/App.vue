<template>
  <div class="container">
    <Buttons />
    <Form />
  </div>
</template>

<script>
import Form from './sections/Form.vue'
import Buttons from './sections/Buttons.vue'

export default {
  name: 'App',
  components: {
    Form,
    Buttons
  }
}
</script>

<style lang="scss">
@import "@/scss/index.scss";
</style>
