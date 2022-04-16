<template>
  <div class="topbar">
    <div class="topbar__left">
      <span class="material-icons-two-tone"> desktop_mac </span>
      <span> YenLong's Playground </span>
    </div>
    <div class="topbar__right">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link active" aria-current="page" href="#">Item</a>
              <a class="nav-link" href="#">Item</a>
              <a class="nav-link" href="#">Item</a>
            </div>
          </div>
        </div>
      </nav>
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
  background-color: $primary;
  padding: 20px;
  display: flex;
  justify-content: space-around;

  &__left {
    @include FontXLarge-Bold;
    .material-icons-two-tone {
      font-size: 44px;
    }
  }
}
</style>
