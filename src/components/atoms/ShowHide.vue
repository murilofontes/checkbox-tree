<template>
  <div class="arrow" @click="showHide()">
    <i :class="{'up': expanded, 'down': !expanded, 'disabled': disabled}" />
  </div>
</template>

<script>
export default {
  name: "ShowHide",
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data: () => {
    return {
      expanded: false
    }
  },
  methods: {
    showHide () {
      if (!this.disabled) {
        this.expanded = !this.expanded
        this.$emit('update:expanded', this.expanded)
      }
    }
  }
};
</script>

<style lang="scss">
.arrow {
  cursor: pointer;

  i {
    border: solid black;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
  }

  .up {
    transform: rotate(-135deg);
    -webkit-transform: rotate(-135deg);
  }

  .down {
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
  }

  .disabled {
    cursor:  not-allowed;
    border: solid gray;
  }
}
</style>
