<template>
  <div id="app" class="main-container">
    <h1>Names list</h1>
    <DataTable :items="data" />
  </div>
</template>

<script>
import DataTable from "./components/organisms/DataTable.vue";
import data from "./data/data.json";
import { mapActions } from 'vuex'

export default {
  name: "App",
  computed: {
    data () {
      return data
    }
  },
  components: {
    DataTable
  },
  methods: {
    ...mapActions(['clearAllNamesSelection'])
  },
  beforeDestroy () {
    this.clearAllNamesSelection()
  }
};
</script>

<style lang="scss">
.main-container {
  width: 60%;
  margin: 4em auto;

  @media screen and (min-height: 700px) {
     width: 90%;
     margin: 2em;
  }
}
</style>
