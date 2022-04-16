<template>
  <div>
    <AppTopbar />
    <slot />
  </div>
</template>

<script lang="ts">
export default {
  setup() {
    const route = useRoute();
    useHead({
      title: `${route.meta.title} - YenLong's Playground`,
    });
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
