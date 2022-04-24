<template>
  <div class="topbar">
    <div @click="isNavOpen = !isNavOpen" class="topbar__nav-toggle">
      <span class="material-icons"> menu </span>
    </div>

    <div class="topbar__title">
      <span class="logo material-icons"> desktop_mac </span>
      <span class="title"> 's Playground </span>
    </div>

    <div class="topbar__nav" :class="{ 'topbar__nav--expand': isNavOpen }">
      <div v-for="n in navItems" :key="n" class="nav-item">
        {{ n.title }}
      </div>
    </div>

    <div class="topbar__right">
      <i class="bi bi-github"></i>
      <span class="material-icons"> login </span>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      isNavOpen: false,
      navItems: [{ title: 'About' }, { title: 'About' }, { title: 'About' }],
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
@import '~/assets/scss/functions.scss';
@import '~/assets/scss/colors.scss';
@import '~/assets/scss/fonts.scss';

.topbar {
  color: black;
  box-shadow: 0px 5px 7px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 20px 0 32px;

  &__nav-toggle {
    $size: 24px;
    padding: 10px;
    margin: {
      right: 5px;
    }
    height: $size;
    width: $size;
    border-radius: $size;
    order: 1;
    box-sizing: content-box;
    cursor: pointer;

    &:hover {
      background-color: shade-color(white, 5);
    }

    @media screen and (min-width: 768px) {
      display: none;
    }
  }

  &__title {
    @include FontXXXBig-Bold;
    display: flex;
    flex-grow: 1;
    order: 2;
    align-items: center;
    padding: 20px 0;

    .logo {
      font-size: 44px;
      margin-right: 20px;
    }

    .title::before {
      content: 'YenLong';
    }

    @media screen and (max-width: 768px) {
      @include FontBig-Bold;

      .logo {
        font-size: 32px;
        margin-right: 15px;
      }

      .title::before {
        content: 'YL';
      }
    }
  }

  &__nav {
    @include FontMedium;
    display: flex;
    order: 3;
    margin: {
      left: auto;
      right: 28px;
    }

    .nav-item {
      margin: 0 10px;
    }

    @media screen and (max-width: 768px) {
      max-height: 0px;
      display: block;
      overflow: hidden;
      margin: 0;
      width: 100vw;
      order: 5;
      transition: max-height 0.5s ease-out;
      .nav-item {
        margin: 10px 0;
        padding: 10px 15px;
        border-radius: 4px;

        &:hover {
          background-color: shade-color(white, 5);
        }
      }
    }

    &--expand {
      @media screen and (max-width: 768px) {
        max-height: 100vh;
        transition: max-height 0.5s ease-in;
      }
    }
  }

  &__right {
    display: flex;
    align-items: center;
    order: 4;

    * {
      font-size: 28px;
      margin-right: 15px;
      cursor: pointer;
    }
  }

  @media screen and (max-width: 768px) {
    padding: {
      left: 10px;
      right: 10px;
    }
  }
}
</style>
