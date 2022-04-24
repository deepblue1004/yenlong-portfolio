<template>
  <div class="topbar" :class="{ 'topbar--sm': smallScreen }">
    <div
      v-if="smallScreen"
      @click="isNavOpen = !isNavOpen"
      class="topbar__nav-toggle"
    >
      <span class="material-icons"> menu </span>
    </div>

    <div class="topbar__title">
      <span class="logo material-icons"> desktop_mac </span>
      <span>
        {{ smallScreen ? 'YL' : 'YenLong' }}
        's Playground
      </span>
    </div>

    <transition name="expand">
      <div
        v-if="(smallScreen && isNavOpen) || !smallScreen"
        class="topbar__nav"
      >
        <div v-for="n in navItems" :key="n" class="nav-item">
          {{ n.title }}
        </div>
      </div>
    </transition>

    <div class="topbar__right">
      <i class="bi bi-github"></i>
      <span class="material-icons"> login </span>
    </div>
  </div>
</template>

<script lang="ts">
const SMALL_SCREEN_WIDTH = 700;

export default {
  data() {
    return {
      windowWidth: SMALL_SCREEN_WIDTH,
      isNavOpen: false,
      navItems: [{ title: 'About' }, { title: 'About' }, { title: 'About' }],
    };
  },
  watch: {},
  computed: {
    smallScreen(): boolean {
      return this.windowWidth < SMALL_SCREEN_WIDTH;
    },
  },
  mounted() {
    const vm = this;
    vm.$nextTick(() => {
      window.addEventListener('resize', vm.onResize);
    });
    vm.windowWidth = window.innerWidth;
  },
  beforeDestroy() {
    const vm = this;
    window.removeEventListener('resize', vm.onResize);
  },
  methods: {
    onResize() {
      const vm = this;
      vm.windowWidth = window.innerWidth;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~/assets/scss/functions.scss';
@import '~/assets/scss/colors.scss';
@import '~/assets/scss/fonts.scss';

.topbar {
  color: black;
  box-shadow: 0px 5px 7px rgba(0, 0, 0, 0.1);
  padding: 20px {
    left: 32px;
  }
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;

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
  }

  &__title {
    @include FontXXXBig-Bold;
    display: flex;
    flex-grow: 1;
    order: 2;
    align-items: center;

    .logo {
      font-size: 44px;
      margin-right: 20px;
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
}

.topbar--sm {
  padding: {
    left: 10px;
    right: 10px;
  }
  .topbar__title {
    @include FontBig-Bold;
  }

  .logo {
    font-size: 32px;
    margin-right: 15px;
  }

  .topbar__nav {
    display: block;
    margin: 0;
    width: 100vw;
    order: 5;
    .nav-item {
      margin: 10px 0;
      padding: 10px 15px;
      border-radius: 4px;

      &:hover {
        background-color: shade-color(white, 5);
      }
    }
  }
}
</style>
