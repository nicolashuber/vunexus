<template>
  <div>
    <h2>Form</h2>
    <h4>Input</h4>

    <v-field label="Name" state="danger" help="Your complete name">
      <v-input v-model="form.name" placeholder="Your name" />
    </v-field>

    <v-field label="Email">
      <v-input disabled placeholder="Your email" />
    </v-field>

    <v-field v-for="(size, index) in sizes" :key="index">
      <v-input :size="size" :placeholder="`Input size ${size}`" />
    </v-field>

    <v-field label="Textarea">
      <v-textarea placeholder="Your message" />
    </v-field>

    <v-field label="Select">
      <v-select
        v-model="form.skill"
        placeholder="Select a option"
        :options="[
          { id: 'js', text: 'Javascript' },
          { id: 'php', text: 'PHP' }
        ]"
      />
    </v-field>
  </div>
</template>

<script>
import VField from '@/components/forms/Field.vue'
import VInput from '@/components/forms/Input.vue'
import VSelect from '@/components/forms/Select.vue'
import VTextarea from '@/components/forms/Textarea.vue'

export default {
  components: {
    VField,
    VInput,
    VSelect,
    VTextarea
  },
  data () {
    return {
      form: {
        name: 'Joe Doe',
        skill: null,
      },
      sizes: [
        'small',
        'default',
        'medium',
        'large'
      ]
    }
  }
}
</script>
