<template>
  <b-dropdown position="is-bottom-left" append-to-body aria-role="menu">
    <a class="navbar-item" slot="trigger" role="button">
      <span>
        Welcome
        <strong>{{$auth.user.nickname}}</strong>
      </span>
      <b-icon icon="menu-down"></b-icon>
    </a>
    <b-dropdown-item has-link aria-role="menuitem">
      <nuxt-link to="/items/my">
        <b-icon icon="heart"></b-icon>My items
      </nuxt-link>
    </b-dropdown-item>
    <hr class="dropdown-divider" aria-role="menuitem" />
    <b-dropdown-item value="settings">
      <b-icon icon="cog"></b-icon>Settings
    </b-dropdown-item>
    <b-dropdown-item value="logout" aria-role="menuitem" @click="$auth.logout()">
      <b-icon icon="logout"></b-icon>Logout
    </b-dropdown-item>
  </b-dropdown>
</template>
