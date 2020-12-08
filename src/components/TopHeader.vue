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
          <b-nav-item href="/">Kappers</b-nav-item>
          <b-nav-item href="/Appointment">Afspraak maken</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <div @mouseover="OnHover" @mouseleave="OnLeave">
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
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import "animate.css";

export default {
  data() {
    return {
      triggered: false,
    };
  },
  methods: {
    OnHover() {
      this.$refs.dropdown.visible = true;
    },
    OnLeave() {
      this.$refs.dropdown.visible = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.nav-item.nav-item.nav-item a {
  color: white;
}
</style>
