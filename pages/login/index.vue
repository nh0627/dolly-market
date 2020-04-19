<template>
  <section class="login hero is-primary is-fullheight">
    <AuthForm buttonText="Login" :submitForm="loginUser" :hasName="false"/>
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
      const { email, password } = userInfo
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
