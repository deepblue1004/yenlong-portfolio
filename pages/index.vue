<template>
  <div class="index-body">body</div>
</template>

<script lang="ts">
export default {
  setup() {
    definePageMeta({
      layout: 'index',
      title: 'Home',
    });
    return {};
  },
};
</script>

<style lang="scss" scoped>
.index-body {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 20px;
}
</style>

