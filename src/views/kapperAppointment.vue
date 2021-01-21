<template>
  <b-container>
    <b-row cols="12" align-v="center" align-h="center" class="my-row">
      <appointment-card
        v-for="obj in list"
        :key="obj.obj.accId"
        :name="obj.obj.accName"
        :date="obj.obj.date"
        :time="obj.obj.time"
      ></appointment-card>
    </b-row>
  </b-container>
</template>

<script>
// @ is an alias to /src
import axios from "axios";

import appointmentCard from "@/components/appointmentCard.vue";
export default {
  components: {
    appointmentCard: appointmentCard,
  },
  data() {
    return {
      list: [],
      app: {
        account: {
          name: null,
          id: null,
        },
        date: null,
        time: null,
      },
    };
  },
  created() {
    axios.get("http://localhost:9999/appointment").then((response) => {
      console.log(response);
      response.data._embedded.appointmentResourceList.forEach((appointment) => {
        if (appointment.appointment.kapper.id == localStorage.getItem("id")) {
          this.list.push({
            obj: {
              accName: (this.app.account.name =
                appointment.appointment.account.name),
              accId: (this.app.account.id = appointment.appointment.account.id),
              date: (this.app.date = appointment.appointment.date),
              time: (this.app.time = appointment.appointment.time),
            },
          });
        }
      });
      console.log(this.list);
    });
  },
};
</script>

<style lang="scss" scoped></style>
