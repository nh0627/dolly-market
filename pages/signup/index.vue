<template>
  <section class="login hero is-primary is-fullheight">
    <AuthForm
      button-text="Register"
      :submit-form="registerUser"
      :has-name="true"
    />
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
