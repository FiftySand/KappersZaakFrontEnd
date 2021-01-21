<template>
  <div>
    <b-container class="mt-5">
      <b-row align-h="center">
        <b-col cols="6" align-h="end">
          <b-form @submit="onSubmit" id="loginForm">
            <b-form-group
              id="input-group-3"
              label="Username:"
              label-for="input-3"
            >
              <b-form-input
                id="input-3"
                v-model="account.Name"
                type="name"
                required
                placeholder="Enter Username"
                style="text-align: center"
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-2"
              label="Your Password:"
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
import storage from "../store/localStorageService";
export default {
  data() {
    return {
      account: {
        Password: "",
        Name: "",
      },
      show: true,
    };
  },
  methods: {
    onSubmit(evt) {
      console.log(evt);
      evt.preventDefault(),
        console.log(this.account.Password),
        console.log(this.account.Name);

      axios
        .post("http://localhost:9999/login", {
          password: this.account.Password,
          name: this.account.Name,
        })
        .then((response) => {
          storage.setUserName(response.data.account.name),
            storage.setToken(response.data.token),
            storage.setId(response.data.account.id);
          storage.setUserRole("kapper"),
            alert("Succesvol ingelogd"),
            this.$router.push("/appointment");
        })
        .catch((error) => {
          alert("Foutieve gegevens"), console.log(error);
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
