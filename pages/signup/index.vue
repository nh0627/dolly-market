<template>
  <section class="login hero is-primary is-fullheight">
    <AuthForm buttonText="Register" :submitForm="registerUser" :hasName="true" />
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
        alert("You pressed a button!")
    },
  },
}
</script>
