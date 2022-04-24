<template>
  <client-only>
    <div
      class="slideshow"
      @mousemove="moveSelf($event)"
      @touchmove="moveSelf($event)"
    >
      <pre :style="transformXY">
    <code v-highlight class="csharp">
  namespace Playground
  {
      class YenLong {
          static void Main(string[] args)
          {
              System.Console.WriteLine("Welcome to YenLong's Playground!");
          }
      }
  }
    </code>
    </pre>
    </div>
  </client-only>
</template>

<script lang="ts">
export default {
  data() {
    return {
      transformXY: '',
    };
  },
  mounted() {},
  methods: {
    moveSelf(e: MouseEvent | TouchEvent) {
      const vm = this;
      let eventPoint;

      if (e instanceof MouseEvent) {
        eventPoint = e;
      } else {
        eventPoint = e.touches[0];
      }
      const posX = eventPoint.clientX / 4;
      const posY = eventPoint.clientY / 10;
      vm.transformXY = `transform: translate(${posX}px, -${posY}px);`;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~/assets/scss/colors.scss';

.slideshow {
  overflow: hidden;
  height: 200px;

  @media screen and (max-width: 768px) {
    height: 160px;
  }

  @media screen and (max-width: 576px) {
    height: 110px;
  }

  pre {
    max-width: 620px;
    margin: auto;

    @media screen and (max-width: 768px) {
      zoom: 0.85;
      margin: 0;
    }

    @media screen and (max-width: 576px) {
      zoom: 0.6;
      margin: 0;
    }
  }

  code {
    display: contents;
  }

  :deep(span.hljs-string) {
    display: inline-flex;
    overflow: hidden;
    border-right: 2px solid $secondary;
    animation: typing 5s steps(25, end) infinite,
      blink-caret 1s step-end infinite;
  }
}

/* The typing effect */
@keyframes typing {
  from {
    max-width: 0px;
  }
  to {
    max-width: 300px;
  }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: $secondary;
  }
}
</style>
