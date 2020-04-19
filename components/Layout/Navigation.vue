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
        <!-- <div class="navbar-start">
        <a class="navbar-item">Home</a>

        <a class="navbar-item">Documentation</a>

        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">More</a>

          <div class="navbar-dropdown">
            <a class="navbar-item">About</a>
            <a class="navbar-item">Jobs</a>
            <a class="navbar-item">Contact</a>
            <hr class="navbar-divider" />
            <a class="navbar-item">Report an issue</a>
          </div>
        </div>
        </div>-->

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <nuxt-link to="/" class="navbar-item logo">
                <b-button class="button is-primary">
                  <strong>Sign up</strong>
                </b-button>
              </nuxt-link>
              <nuxt-link to="/login" class="navbar-item logo">
                <b-button class="button is-light">
                  Log in
                </b-button>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.logo {
  font-family: "Pacifico";
  font-weight: 600;
  letter-spacing: 2px;
}
</style>
