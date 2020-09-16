<template>
  <table class="table">
    <TableBody v-for="item in items" :key="item.id" :content="item">
      <DataTable :items="item.children" slot="children" />
    </TableBody>
  </table>
</template>

<script>
import TableBody from "../molecules/TableBody.vue";

export default {
  name: "DataTable",
  props: {
    items: {
      type: Object
    }
  },
  components: {
    TableBody
  }
};
</script>

<style lang="scss">
.table {
  margin-bottom: 0;
}
</style>
