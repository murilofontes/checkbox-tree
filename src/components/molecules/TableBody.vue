<template>
  <tbody class="table-body">
    <tr class="row-container">
      <th scope="row">
        <Checkbox :label="content.name" :value="content.id" :children="content.children" />
      </th>
      <td>
        <ShowHide v-if="Object.keys(content.children).length > 0" :expanded.sync="expanded" />
      </td>
    </tr>
    <tr v-if="content.children && Object.keys(content.children).length > 0 && expanded">
      <td colspan="2" class="children-container">
        <slot name="children" />
      </td>
    </tr>
  </tbody>
</template>

<script>
import Checkbox from "../atoms/Checkbox.vue";
import ShowHide from "../atoms/ShowHide.vue";

export default {
  name: "TableBody",
  props: {
    content: {
      type: Object
    }
  },
  data: () => {
    return {
      expanded: false
    };
  },
  components: {
    Checkbox,
    ShowHide
  }
};
</script>

<style lang="scss" scoped>
.table-body {
  .row-container {
    &:hover {
      background-color: #d8d8ff;
    }
  }
  .children-container {
    padding: 0 2em;
  }
}
</style>