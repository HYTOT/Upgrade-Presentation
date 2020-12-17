<template>
  <article class="first">
    <img src="images/ajax.png" @click="show = !show">
    <p class="full-name" :class="{ show }">
      Asynchronous <span>JavaScript</span> And XML
    </p>
    <p class="job" :class="{ show }">web front-end programmer</p>
  </article>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class First extends Vue {

  private show:boolean = false

}
</script>

<style lang="scss" scoped>
.first {
  // 图片比例 3:2
  img {
    width: 30vw;
    position: absolute;
    top: calc(50vh - 10vw);
    cursor: pointer;
  }
  p {
    position: absolute;
    font: {
      size: 2.4vw;
      weight: bold;
      style: italic;
    }
    color: $xkb-primary;
    word-spacing: 1vw;
    opacity: 0;
    transition: all .6s;
    &.full-name {
      top: calc(50vh - 18vw);
      filter: hue-rotate(720deg);
      transform: translate(10vw) rotate(10deg);
      span {
        font-size: 4vw;
        color: $vue-color;
      }
    }
    &.job {
      top: calc(50vh + 12vw);
      filter: hue-rotate(180deg);
      transform: translateX(-10vw) rotate(10deg);
    }
    &.show {
      opacity: 1;
      filter: hue-rotate(0);
      transform: translateX(0);
    }
  }
}
</style>