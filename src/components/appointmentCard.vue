<template>
  <b-col md="6" lg="4" cols="8" class="my-col">
    <b-card :title="name" style="max-width:25rem min-width:20rem" class="mb-2">
      <b-card-text>
        Jij hebt een afspraak met, {{ name }} op: {{ date }} om: {{ time }}
      </b-card-text>
    </b-card>
  </b-col>
</template>

<script>
export default {
  props: ["name", "date", "time"],
};
</script>

<style lang="scss" scoped></style>
