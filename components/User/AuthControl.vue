<template>
  <div class="navbar-item">
    <div class="buttons">
      <div v-if="$auth.loggedIn">
        <!-- <b-navbar-dropdown label="`${$auth.user.nickname}`">
          <b-navbar-item href="#">About</b-navbar-item>
          <b-navbar-item href="#">Contact</b-navbar-item>
        </b-navbar-dropdown>
        <b-button class="button is-light">
          <strong></strong>
        </b-button>
        <b-button class="button is-light" @click="$auth.logout()">
          <strong>Logout</strong>
        </b-button> -->
        <UserDropdown />
      </div>
      <div v-else>
        <b-navbar-item tag="div">
          <div class="buttons">
            <b-button class="button" tag="router-link" to="/signup" type="is-primary">
              <strong>Sign up</strong>
            </b-button>
            <b-button class="button" tag="router-link" to="/login" type=" is-light">
              <strong>Log in</strong>
            </b-button>
          </div>
        </b-navbar-item>
      </div>
    </div>
  </div>
</template>

<script>
import UserDropdown from '@/components/User/UserDropdown'

export default {
  components: {
    UserDropdown
  }
}
</script>