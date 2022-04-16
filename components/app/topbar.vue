<template>
  <div class="topbar">
    <div class="topbar__left">
      <span> Logo </span>
      <span> YenLong's Playground </span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import '~/assets/scss/functions.scss';
@import '~/assets/scss/colors.scss';
@import '~/assets/scss/fonts.scss';

.topbar {
  @include FontCodeMedium-XBold;
  background-color: $primary;
}
</style>
