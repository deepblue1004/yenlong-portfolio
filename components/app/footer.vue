<template>
  <div class="footer">
    <div class="footer__icons">
      <div v-for="icon in icons" :key="icon.bi">
        <nuxt-link :href="icon.href" target="_blank">
          <i :class="'bi-' + icon.bi" class="bi"></i>
        </nuxt-link>
      </div>
    </div>

    <div class="footer__copyright">
      &copy; {{ new Date().getFullYear() }} Made with ❤️ by YenLong
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      icons: [
        {
          bi: 'linkedin',
          href: 'https://www.linkedin.com/in/yenlong-lee-9b6a6b181/',
        },
        {
          bi: 'github',
          href: 'https://github.com/deepblue1004',
        },
        {
          bi: 'envelope-open-heart-fill',
          href: 'mailto:leeyenlong1@gmail.com',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import '~/assets/scss/functions.scss';
@import '~/assets/scss/colors.scss';
@import '~/assets/scss/fonts.scss';

.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: $primary;
  padding: 20px;

  &__icons {
    display: flex;
    margin: 20px;

    * {
      color: white;
    }

    .bi {
      font-size: 28px;
      margin: 20px;

      cursor: pointer;
      &::before {
        transition: transform 0.4s;
      }
      &:hover::before {
        transform: scale(1.5);
        color: tint-color($secondary, 10);
      }
    }
  }

  &__copyright {
    margin: 20px;
    color: white;
  }
}
</style>
