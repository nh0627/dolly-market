<template>
  <section class="login hero is-primary is-fullheight">
    <AuthForm button-text="Login" :submit-form="loginUser" :has-name="false" />
  </section>
</template>

<script>
import AuthForm from "@/components/UI/AuthForm"

export default {
  components: {
    AuthForm,
  },
  methods: {
    async loginUser(userInfo) {
      try {
        await this.$auth.loginWith("local", {
          data: userInfo,
        })
        this.$buefy.snackbar.open(`Welcome ${this.$auth.user.nickname} 😘`)
      } catch (e) {
        console.log(e)
      }
    },
  },
}
</script>
