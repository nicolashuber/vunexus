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

    <v-radio v-model="form.option" name="form-option" value="A">Option A</v-radio>
    <v-radio v-model="form.option" name="form-option" value="B">Option B</v-radio>

    <v-checkbox v-model="form.skills" value="php">PHP</v-checkbox>
    <v-checkbox v-model="form.skills" value="js">JS</v-checkbox>

    <pre>
      {{ form }}
    </pre>
  </div>
</template>

<script>
import VField from '@/components/forms/Field.vue'
import VRadio from '@/components/forms/Radio.vue'
import VInput from '@/components/forms/Text.vue'
import VSelect from '@/components/forms/Select.vue'
import VCheckbox from '@/components/forms/Checkbox.vue'
import VTextarea from '@/components/forms/Textarea.vue'

export default {
  components: {
    VField,
    VRadio,
    VInput,
    VSelect,
    VCheckbox,
    VTextarea
  },
  data () {
    return {
      form: {
        name: 'Joe Doe',
        skill: null,
        skills: [],
        option: null
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
