<template>
  <div class="hero-body">
    <div class="container">
      <div class="columns is-centered is-bold">
        <div class="column is-5-tablet is-6-desktop is-3-widescreen box">
          <form @submit.prevent="submitForm(userInfo)">
            <b-field label="Name" v-if="hasName">
              <b-input v-model="userInfo.nickname" required v-if="hasName" />
            </b-field>
            <b-field label="Email">
              <b-input v-model="userInfo.email" placeholder="e.g. bobsmith@gmail.com" required />
            </b-field>
            <b-field label="Password">
              <b-input v-model="userInfo.password" type="password" maxlength="30" required />
            </b-field>

            <!-- <div class="field">
              <b-checkbox>Remember me</b-checkbox>
            </div>-->
            <b-button type="is-success" native-type="submit">{{ buttonText }}</b-button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInfo: {
        nickname: "",
        email: "goshopping@test.com",
        password: "",
      }
    }
  },
  props: {
    submitForm: {
      type: Function,
      required: false,
    },
    buttonText: {
      type: String,
      required: true,
    },
    hasName: {
      type: Boolean,
      requried: false
    },
  }
}
</script>