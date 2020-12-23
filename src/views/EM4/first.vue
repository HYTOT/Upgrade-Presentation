<template>
  <article class="first">
    <img src="images/ajax.png" @click="show = !show">
    <p class="job" :class="{ show }">a web front-end programmer</p>
    <p class="full-name" :class="{ show }">
      Asynchronous <span class="js" @click="$router.replace('/second')">JavaScript</span> And XML
    </p>
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
  word-spacing: 1vw;
  // 图片比例 3:2
  img {
    width: 21vw;
    position: absolute;
    cursor: pointer;
  }
  p {
    position: absolute;
    font: {
      size: 1.8vw;
      weight: bold;
    }
    opacity: 0;
    transition: all .6s;
    &.job {
      top: calc(50vh - 11vw);
      color: $redux-color;
      filter: hue-rotate(720deg);
      transform: translateX(13vw) rotate(15deg);
    }
    &.full-name {
      top: calc(50vh + 7vw);
      color: $xkb-primary;
      filter: hue-rotate(720deg);
      transform: translate(-13vw) rotate(15deg);
      .js {
        font-size: 2.8vw;
        color: $vue-color;
        text-decoration: underline;
        cursor: pointer;
      }
    }
    &.show {
      opacity: 1;
      filter: hue-rotate(0);
      transform: translateX(0) rotate(0);
    }
  }
}
</style>