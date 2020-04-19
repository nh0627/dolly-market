<template>
  <div>
    <div v-if="$auth.loggedIn">
      <nuxt-link to="/" class="navbar-item logo">
        {{ $auth.user.email }}
        <b-button class="button is-light">
          <strong>Logout</strong>
        </b-button>
      </nuxt-link>
    </div>
    <div v-else>
      <div class="buttons">
        <nuxt-link to="/signup" class="navbar-item logo">
          <b-button class="button is-primary">
            <strong>Sign up</strong>
          </b-button>
        </nuxt-link>
        <nuxt-link to="/login" class="navbar-item logo">
          <b-button class="button is-light">
            <strong>Log in</strong>
          </b-button>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import User from "@/components/User/UserBadge"

export default {
    components: {
        User,
    },
}
</script>
