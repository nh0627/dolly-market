<template>
  <section class="login hero is-primary is-fullheight">
    <AuthForm button-text="Register" :submit-form="registerUser" :has-name="true" />
  </section>
</template>

<script>
import AuthForm from "@/components/UI/AuthForm"

export default {
  components: {
    AuthForm,
  },
  methods: {
    async registerUser(userInfo) {
      await this.$axios.post('/api/auth/signup', userInfo)
      this.$auth.loginWith("local", {
        data: userInfo,
      })
    },
  },
}
</script>
