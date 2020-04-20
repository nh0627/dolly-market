<template>
  <div class="navbar-item">
    <div class="buttons">
      <div v-if="$auth.loggedIn">
        <!-- Todo: 유저 프로필 보여주는 메뉴 -->
        <b-button class="button is-light">
          <strong>{{ $auth.user.nickname }}</strong>
        </b-button>
        <b-button class="button is-light" @click="$auth.logout()">
          <strong>Logout</strong>
        </b-button>
      </div>
      <div v-else>
        <nuxt-link to="/signup">
          <b-button class="button is-primary">
            <strong>Sign up</strong>
          </b-button>
        </nuxt-link>
        <nuxt-link to="/login" class>
          <b-button class="button is-light">
            <strong>Log in</strong>
          </b-button>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
