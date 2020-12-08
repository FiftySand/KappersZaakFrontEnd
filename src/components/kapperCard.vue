<template>
  <b-col md="6" lg="4" cols="8" class="my-col">
    <b-card
      :title="name"
      img-src="../assets/john.jpg"
      img-top
      img-alt="No picture found"
      style="max-width:25rem min-width:20rem"
      class="mb-2"
    >
      <b-card-text>
        Dit is jouw kapper, {{ name }} leeftijd: {{ age }}
      </b-card-text>
      <b-button variant="primary">Maak afspraak</b-button>
      <b-button variant="info">Meer info</b-button>
    </b-card>
  </b-col>
</template>

<script>
export default {
  props: ["name", "age"],
};
</script>

<style lang="scss" scoped>
</style>