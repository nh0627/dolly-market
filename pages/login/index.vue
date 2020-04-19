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
      this.$auth.loginWith('local', {
        data: userInfo
      })
    },
  },
}
</script>
