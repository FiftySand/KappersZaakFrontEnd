<template>
  <div>
    <b-container>
      <b-row>
        <b-col cols="6">
          <b-form
            @submit="onSubmit"
            @reset="onReset"
            v-if="show"
            id="SignUpForm"
          >
            <b-form-group
              id="input-group-1"
              label="Your Name:"
              label-for="input-1"
            >
              <b-form-input
                id="input-1"
                v-model="account.Name"
                required
                placeholder="Enter name"
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
                placeholder="Enter password"
              ></b-form-input>
            </b-form-group>

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
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-4">
              <b-form-checkbox
                v-model="account.ReceiveEmail"
                id="checkboxes-4"
                label-for="input-4"
                >Emails ontvangen?</b-form-checkbox
              >
            </b-form-group>

            <b-button type="submit" variant="primary">Submit</b-button>
            <b-button type="reset" variant="danger">Reset</b-button>
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
