<template v-if="childDataLoaded">
  <div>
    <b-container
      style="background-color: rgba(200, 200, 200, 0.2)"
      class="pt-3"
    >
      <b-row>
        <barbercard
          v-if="activatedCard"
          :key="activeKapper.id"
          :name="activeKapper.Name"
          :age="activeKapper.Age"
          class="animate__animated animate__backInDown animate__delay0.5s mb-2"
        ></barbercard>
        <barbercard v-else style="visibility: hidden; display: block">
        </barbercard>

        <b-col>
          <b-form id="appointmentForm" align-h="end">
            <b-form-select
              :options="kappers"
              v-on:change="getSelectedItem"
              class="animate__animated animate__bounce animate__delay2s"
            ></b-form-select>

            <b-form-datepicker
              id="example-datepicker"
              v-model="value"
              :min="min"
              :max="max"
              class="mb-5 mt-5"
            ></b-form-datepicker>
            <b-form-timepicker v-model="value" locale="de"></b-form-timepicker>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";

import kapperCard from "@/components/kapperCard.vue";

export default {
  components: {
    barbercard: kapperCard,
  },
  methods: {
    getSelectedItem: function(myarg) {
      // Just a regular js function that takes 1 arg
      this.list.forEach((kapper) => {
        if (kapper.kapper.id == myarg) {
          (this.activeKapper.id = myarg),
            (this.activeKapper.Name = kapper.kapper.name),
            (this.activeKapper.Age = kapper.kapper.age),
            (this.activatedCard = true);
        }
      });
    },
  },
  data() {
    const now = new Date();

    return {
      appointment: {
        kapper: "",
        account: "",
        date: "",
        time: "",
      },
      activatedCard: false,
      min: now,
      max: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 2),
      list: [],
      kappers: [],
      activeKapper: {
        Id: "",
        Name: "",
        Age: "",
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
