<template>
  <div class="yus-swipe-item">
    <slot></slot>
  </div>
</template>

<script>
export default {
  computed: {
    index () {
      return this.$parent.$children.indexOf(this);
    }
  },

  created () {
    this.$parent.children.push(this);
  },

  destroyed () {
    this.$parent.children.splice(this.index, 1);
  }
};
</script>

<style>
.yus-swipe-item {
  flex-shrink: 0;
  width: 100%;
  height: 100%;
}
</style>
