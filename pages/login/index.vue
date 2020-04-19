<template>
  <section class="login hero is-primary is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered is-bold">
          <div class="column is-5-tablet is-6-desktop is-3-widescreen box">
            <form @submit.prevent="onSubmit">
              <b-field label="Email">
                <b-input
                  v-model="email"
                  placeholder="e.g. bobsmith@gmail.com"
                  required
                />
              </b-field>
              <b-field label="Password">
                <b-input
                  v-model="password"
                  type="password"
                  maxlength="30"
                  required
                />
              </b-field>

              <!-- <div class="field">
                <b-checkbox>Remember me</b-checkbox>
              </div> -->
              <b-button
                type="is-success"
                tag="input"
                value="Login"
                native-type="submit"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      email: "goshopping@test.com",
      password: "",
    }
  },
  methods: {
    async onSubmit() {
      const { email, password } = this
      // this.$store.dispatch("authenticateUser", {
      const result = await this.$axios.post(`/api/auth/login`, {
        email,
        password,
      })
      console.log(result.data)
    },
  },
}
</script>
