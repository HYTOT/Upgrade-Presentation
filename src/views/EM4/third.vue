<template>
  <article class="third" :class="{ loaded }">
    <section class="js">
      <img @click="loaded = true" src="images/js.jpg">
      <div class="_reason">convenient to share things</div>
      <div class="_job">
        with his hard work...<i class="iconfont icon-code"></i>then he got a job...
      </div>
    </section>
    <img class="work" :class="{ loaded }" @click="loaded = false" src="images/work.jpg">
    <aside class="info" :class="{ loaded }">
      <div class="_row">
        Google Creative Lab<i class="iconfont icon-centericjob"></i>
      </div>
      <div class="_row">
        to get involved in <span @click="show = false">Angular</span>
      </div>
    </aside>
    <section class="angular" :class="{ 'show': loaded && !show }">
      <img src="images/angular.jpg">
      <div class="_row _angular">deep researched...</div>
      <div class="_row _angular">started his <span @click="show = true">personal open source project...</span></div>
    </section>
    <section class="vuejs" :class="{ 'show': loaded && show }">
      <img src="images/vue.jpg" @click="$router.replace('/fourth')">
      <div class="_row _vue">imitated & combined with...</div>
      <div class="_row _vue">was becoming more and more famous...</div>
    </section>
    <img class="famous" :class="{ 'show': loaded && show }" src="images/famous.png">
  </article>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Third extends Vue {

  private loaded:boolean = false
  private show:boolean = false

}
</script>

<style lang="scss" scoped>
.third {
  background: #323230;
  transition: all 1s;
  &.loaded {
    background: transparent;
    .js {
      opacity: 0;
      transform: scale(1.2);
      img {
        cursor: auto;
      }
    }
  }
  .js {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    height: 30vw;
    padding: 3vw;
    background: #323230;
    border-radius: 2vw;
    overflow: hidden;
    transition: all 1s;
    img {
      width: 22vw;
      cursor: pointer;
    }
    ._reason {
      font-size: 2.4vw;
      color: #f6e58d;
    }
    ._job {
      font-size: 1.3vw;
      color: white;
      i {
        margin: 0 1vw;
        font-size: 2.2vw;
        color: #ff7979;
      }
    }
  }
  .work {
    position: absolute;
    top: 5vw;
    right: 5vw;
    z-index: 2;
    width: 24vw;
    border-radius: 1vw;
    opacity: 0;
    transition: all 1s;
    &.loaded {
      top: 1vw;
      right: 1vw;
      opacity: 1;
      cursor: pointer;
    }
  }
  .info {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    position: absolute;
    top: 15vw;
    right: 10vw;
    z-index: 2;
    opacity: 0;
    transition: all 1s;
    &.loaded {
      right: 2vw;
      opacity: 1;
    }
    ._row {
      display: flex;
      align-items: center;
      padding: .5vw 0;
      font-size: 1.8vw;
      color: #e12e33;
      span {
        text-decoration: underline;
        cursor: pointer;
        margin-left: .8vw;
      }
      i {
        margin: 0 1vw;
        font-size: 2.2vw;
        color: $xkb-primary;
      }
    }
  }
  .angular, .vuejs {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    opacity: 0;
    transform: scale(0);
    transition: all 1s;
    img {
      width: 22vw;
    }
    &.show {
      opacity: 1;
      transform: scale(1);
      img {
        cursor: pointer;
      }
    }
    ._row {
      padding: .5vw 0;
      font-size: 1.8vw;
      &._angular {
        color: #e12e33;
      }
      &._vue {
        color: $vue-color;
      }
      span {
        font-weight: bold;
        text-decoration: underline;
        color: $vue-color;
        cursor: pointer;
      }
    }
  }
  .famous {
    position: absolute;
    bottom: 5vw;
    left: 5vw;
    z-index: 2;
    width: 24vw;
    border-radius: 1vw;
    opacity: 0;
    transition: all 1s;
    &.show {
      bottom: 1vw;
      left: 1vw;
      opacity: 1;
    }
  }
}
</style>