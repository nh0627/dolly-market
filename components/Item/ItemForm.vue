<template>
  <div class="columns is-centered is-bold">
    <div class="column">
      <form @submit.prevent>
        <b-field v-model="item.title" label="Title">
          <b-input required />
        </b-field>
        <b-field label="Description">
          <b-input v-model="item.description" required />
        </b-field>
        <b-field label="Price">
          <b-input v-model="item.price" required />
        </b-field>
        <b-button type="is-success" native-type="submit">
          {{ buttonText }}
        </b-button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    submitForm: {
      type: Function,
      required: false,
    },
    hasName: {
      type: Boolean,
      requried: false,
    },
  },
  data() {
    return {
      buttonText: "Sell it🧸",
      item: {
        title: "",
        description: "",
        password: "",
        price: "",
      },
    }
  },
}
</script>
