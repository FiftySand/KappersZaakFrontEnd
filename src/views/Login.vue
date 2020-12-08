<template>
  <div>
    <b-container class="mt-5">
      <b-row align-h="center">
        <b-col cols="6" align-h="end">
          <b-form @submit="onSubmit" id="loginForm">
            <b-form-group
              id="input-group-3"
              label="Email address:"
              label-for="input-3"
            >
              <b-form-input
                id="input-3"
                v-model="account.Email"
                type="email"
                required
                placeholder="Enter email"
                style="text-align: center"
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-2"
              label="Your PassWord:"
              label-for="input-2"
            >
              <b-form-input
                id="input-2"
                v-model="account.Password"
                required
                type="password"
                placeholder="Enter password"
                style="text-align: center"
              ></b-form-input>
            </b-form-group>

            <b-button type="submit" variant="primary" class="mt-3"
              >Login</b-button
            >
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      account: {
        Name: "",
        Password: "",
        Email: "",
        ReceiveEmail: null,
      },
      show: true,
    };
  },
  methods: {
    onSubmit(evt) {
      console.log(evt);
      evt.preventDefault();

      axios
        .post("http://localhost:9999/account/", {
          name: this.account.Name,
          password: this.account.Password,
          email: this.account.Email,
          receiveEmail: this.account.ReceiveEmail,
        })
        .catch((err) => console.log(err));
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.account.Name = "";
      this.account.Email = "";
      this.account.Password = null;
      this.account.ReceiveEmail = null;
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
#SignUpForm {
  color: white;
  text-align: center;
}
</style>
