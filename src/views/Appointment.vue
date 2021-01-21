<template v-if="childDataLoaded">
  <div>
    <b-container
      style="background-color: rgba(200, 200, 200, 0.2)"
      class="pt-3"
    >
      <b-row>
        <barbercard
          v-if="activatedCard"
          :key="Kapper.id"
          :name="Kapper.name"
          :age="Kapper.age"
          class="animate__animated animate__backInDown animate__delay0.5s mb-2"
        ></barbercard>
        <barbercard v-else style="visibility: hidden; display: block">
        </barbercard>

        <b-col>
          <b-form @submit="onSubmit" id="appointmentForm" align-h="end">
            <b-form-select
              :options="kappers"
              v-on:change="getSelectedItem"
              class="animate__animated animate__bounce animate__delay2s"
            ></b-form-select>

            <b-form-datepicker
              id="example-datepicker"
              v-model="appointment.date"
              :min="min"
              :max="max"
              class="mb-5 mt-5"
            ></b-form-datepicker>
            <b-form-timepicker
              v-model="appointment.time"
              locale="de"
            ></b-form-timepicker>

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

import kapperCardAppointment from "@/components/kapperCardAppointment.vue";

export default {
  components: {
    barbercard: kapperCardAppointment,
  },
  methods: {
    getSelectedItem: function(myarg) {
      // Just a regular js function that takes 1 arg
      this.list.forEach((kapper) => {
        if (kapper.kapper.id == myarg) {
          (this.Kapper.id = myarg),
            (this.Kapper.name = kapper.kapper.name),
            (this.Kapper.age = kapper.kapper.age),
            (this.activatedCard = true);
        }
      });
    },
    onSubmit(evt) {
      console.log(evt);
      evt.preventDefault(),
        console.log("hier de info"),
        console.log(this.appointment),
        console.log(this.Account),
        console.log(this.Kapper);
      axios
        .post("http://localhost:9999/appointment", {
          account: this.Account,
          kapper: this.Kapper,
          date: this.appointment.date,
          time: this.appointment.time,
        })
        .then((response) => {
          console.log(response);
          alert(
            "Afspraak aangemaakt op " +
              response.data.appointment.date.ge +
              " om " +
              response.data.appointment.time +
              " met " +
              response.data.appointment.kapper.name
          );
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  data() {
    const now = new Date();

    return {
      appointment: {
        date: "",
        time: "",
      },
      Account: {
        name: localStorage.getItem("userName"),
      },
      activatedCard: false,
      min: now,
      max: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 2),
      list: [],
      kappers: [],
      Kapper: {
        id: "",
        name: "",
        age: "",
      },
    };
  },
  mounted() {
    axios.get("http://localhost:9999/kapper").then((response) => {
      (this.list = response.data._embedded.kapperResourceList),
        this.list.forEach((kapper) => {
          this.kappers.push({
            value: kapper.kapper.id,
            text: kapper.kapper.name,
          });
        });
    });

    console.log(this.kappers);
  },
};
</script>

<style lang="scss" scoped></style>
