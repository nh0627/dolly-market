<template>
  <div class="navbar-item">
    <div class="buttons">
      <div v-if="$auth.loggedIn">
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