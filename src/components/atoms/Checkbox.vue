<template>
  <div class="checkbox-container custom-control custom-checkbox">
    <input
      type="checkbox"
      class="custom-control-input"
      :value="value"
      v-model="selected"
      :id="'chkbox-' + value"
      @input="selectAllChildren"
    />
    <label class="custom-control-label" :for="'chkbox-' + value">{{ label }}</label>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Checkbox",
  props: {
    label: {
      type: String,
      default: ""
    },
    value: {
      type: String,
      default: ""
    },
    children: {
      type: Object
    }
  },
  data: () => {
    return {
      descendantsIds: []
    };
  },
  methods: {
    ...mapActions(["setName", "setChildrenNames", "unsetChildrenNames"]),
    async selectAllChildren() {
      if (Object.values(this.children).length > 0) {
        await this.getAllDescendantsValues(this.children);
        if (!this.selectedNames.includes(this.value)) {
          this.setChildrenNames(this.descendantsIds);
        } else {
          this.unsetChildrenNames(this.descendantsIds);
          this.descendantsIds = []
        }
      }
    },
    getAllDescendantsValues(children) {
      let _this = this;
      for (const child of Object.values(children)) {
        _this.descendantsIds.push(child.id);
        if (Object.values(child.children).length > 0) {
          _this.getAllDescendantsValues(child.children);
        }
      }
    }
  },
  computed: {
    ...mapGetters(["selectedNames"]),
    selected: {
      get() {
        return this.selectedNames;
      },
      set(value) {
        this.setName(value);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.checkbox-container {
  cursor: pointer;
  label {
    width: 100%;
    cursor: pointer;
  }
}
</style>