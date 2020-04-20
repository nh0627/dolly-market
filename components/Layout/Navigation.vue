<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <nuxt-link to="/" class="navbar-item logo">
          Dolly Market
        </nuxt-link>
        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>
      <div class="navbar-menu">
        <div class="navbar-end">
          <AuthControl />
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import AuthControl from "@/components/Layout/AuthControl"

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
