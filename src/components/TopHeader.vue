<template>
  <div>
    <b-navbar toggleable="lg" variant="secondary">
      <b-navbar-brand
        href="#"
        class="animate__animated animate__rubberBand animate__delay2s"
        >KappersZaak</b-navbar-brand
      >

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav style="color: white">
          <b-nav-item v-if="Role === ''">Niet ingelogd</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav
          v-if="Name == null"
          class="ml-auto"
          @mouseover="OnHover"
          @mouseleave="OnLeave"
        >
          <div>
            <b-nav-item-dropdown right ref="dropdown">
              <!-- Using 'button-content' slot -->
              <template #button-content>
                <em>Gebruiker</em>
              </template>

              <b-dropdown-item class="dropdownmenu" href="/Login"
                >Login</b-dropdown-item
              >
              <b-dropdown-item class="dropdownmenu" href="/Register"
                >Register account</b-dropdown-item
              >
            </b-nav-item-dropdown>
          </div>
        </b-navbar-nav>
        <b-navbar-nav v-else class="ml-auto">
          <div @mouseover="OnHover" @mouseleave="OnLeave">
            <b-nav-item-dropdown right ref="dropdown">
              <!-- Using 'button-content' slot -->
              <template #button-content>
                <em>{{ Name }}</em>
              </template>

              <b-dropdown-item class="dropdownmenu" @click="logout()"
                >Logout</b-dropdown-item
              >
            </b-nav-item-dropdown>
          </div>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import "animate.css";
import storage from "../store/localStorageService";
import Vue from "vue";
export default {
  data() {
    return {
      triggered: false,
      Name: null,
    };
  },
  created() {
    (this.Name = storage.getUserName()), (this.Role = storage.getUserRole());
  },
  computed: {
    Role() {
      return storage.getUserRole();
    },
  },
  methods: {
    OnHover() {
      setTimeout(() => (this.isHidden = false), 1000);
    },
    OnLeave() {
      //this.$refs.dropdown.visible = false;
    },
    logout() {
      storage.clearUserName(),
        storage.clearUserRole(),
        storage.clearId(),
        storage.clearToken();
      (this.Name = storage.getUserName()), (this.Role = storage.getUserRole());
      Vue.forceUpdate();
    },
  },
};
</script>

<style lang="scss" scoped>
.nav-item.nav-item.nav-item a {
  color: white;
}
</style>
