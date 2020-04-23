<template>
  <div class="container">
    <b-navbar>
      <template slot="brand">
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <p class="logo">Dolly Market</p>
        </b-navbar-item>
      </template>
      <template slot="start">
        <b-navbar-item href="#">Home</b-navbar-item>
        <b-navbar-item href="#">Documentation</b-navbar-item>
        <b-navbar-dropdown label="Info">
          <b-navbar-item href="#">About</b-navbar-item>
          <b-navbar-item href="#">Contact</b-navbar-item>
        </b-navbar-dropdown>
      </template>

      <template slot="end">
        <AuthControl />
      </template>
    </b-navbar>
  </div>
</template>

<script>
import AuthControl from "@/components/User/AuthControl"

export default {
  components: {
    AuthControl,
  },
}
</script>

<style scoped>
.logo {
  font-family: "Pacifico";
  font-weight: 600;
  letter-spacing: 2px;
}
</style>
