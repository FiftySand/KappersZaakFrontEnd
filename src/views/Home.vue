<template>
  <b-container>
    <b-row cols="12" align-v="center" align-h="center" class="my-row">
      <barbercard
        v-for="kappers in list"
        :key="kappers.kapper.id"
        :name="kappers.kapper.name"
        :age="kappers.kapper.age"
      ></barbercard>
    </b-row>
  </b-container>
</template>


<script>
// @ is an alias to /src
import axios from "axios";

import kapperCard from "@/components/kapperCard.vue";
export default {
  components: {
    barbercard: kapperCard,
  },
  data() {
    return {
      list: [],
    };
  },
  mounted() {
    axios.get("http://localhost:9999/kapper").then((response) => {
      this.list = response.data._embedded.kapperResourceList;
      console.log(this.list);
    });
  },
};
</script>

<style lang="scss" scoped>
</style>
