<template>
  <div class="hero-body">
    <div class="container">
      <div class="columns is-centered is-bold">
        <div class="column is-5-tablet is-6-desktop is-3-widescreen box">
          <form @submit.prevent="submitForm(userInfo)">
            <b-field v-if="hasName" label="Nickname">
              <b-input v-if="hasName" v-model="userInfo.nickname" required />
            </b-field>
            <b-field label="Email">
              <b-input
                v-model="userInfo.email"
                required
              />
            </b-field>
            <b-field label="Password">
              <b-input
                v-model="userInfo.password"
                type="password"
                maxlength="30"
                required
              />
            </b-field>

            <!-- <div class="field">
              <b-checkbox>Remember me</b-checkbox>
            </div>-->
            <b-button type="is-success" native-type="submit">
              {{ buttonText }}
            </b-button>
          </form>
        </div>
      </div>
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
    buttonText: {
      type: String,
      required: true,
    },
    hasName: {
      type: Boolean,
      requried: false,
    },
  },
  data() {
    return {
      userInfo: {
        nickname: "",
        email: "",
        password: "",
      },
    }
  },
}
</script>
