<template>
  <article class="fourth">
    <div class="background" :class="{ loaded }"
      style="background-image: url('images/product.jpg');"></div>
    <aside class="product" :class="{ loaded }">
      <div class="_row">Last several years,</div>
      <div class="_row">Vue expanded to <span @click="loaded = true">a complete product</span> that</div>
    </aside>
    <aside class="nowadays" :class="{ 'loaded': loaded && !show }">
      <div class="_row">Nowadays:</div>
      <div class="_row">
        <i class="iconfont icon-centericjob"></i>
        an independent<br>software developer
      </div>
      <div class="_row">
        <i class="iconfont icon-ziyuan1"></i>as the project leader
      </div>
      <br><br>
      <div class="_row">Vue is:</div>
      <div class="_row">
        <i class="iconfont icon-B"></i>simple to learn
      </div>
      <div class="_row">
        <i class="iconfont icon-B"></i>use it to easily build
      </div>
    </aside>
    <aside class="chinese" :class="{ 'loaded': loaded && !show }">
      <div class="_row">Because:</div>
      <div class="_row">
        he is a Chinese
        <i class="iconfont icon-wode"></i>
      </div>
      <div class="_row">
        Chinese-friendly<br>official manuals
        <i class="iconfont icon-Get-Content"></i>
      </div>
      <br><br>
      <div class="_row">Now:</div>
      <div class="_row">
        a majority of companies
        <i class="iconfont icon-qunti"></i>
      </div>
      <div class="_row">including Baidu<i class="iconfont icon-qunti"></i></div>
    </aside>
    <section class="become" :class="{ 'loaded': loaded && !show }">
      <div class="_row" @click="show = true">It becomes... 👉</div>
    </section>
    <img class="websites" :class="{ 'loaded': loaded && !show }" @click="loaded = false" src="images/websites.png">
    <img class="both" :class="{ 'show': loaded && show }" @click="show = false" src="images/both.jpg">
  </article>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Fourth extends Vue {

  private loaded:boolean = false
  private show:boolean = false

}
</script>

<style lang="scss" scoped>
.fourth {
  .background {
    @extend .fullScreen;
    position: absolute;
    background: {
      size: cover;
      position: center;
    }
    opacity: .8;
    transition: all 1s;
    &.loaded {
      opacity: 0;
    }
  }
  .product {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    position: absolute;
    bottom: 6vw;
    right: 6vw;
    z-index: 2;
    opacity: 1;
    transition: all 1s;
    &.loaded {
      right: 10vw;
      opacity: 0;
      ._row {
        span {
          cursor: auto;
        }
      }
    }
    ._row {
      display: flex;
      align-items: center;
      padding: .5vw 0;
      font-size: 2.2vw;
      color: white;
      text-shadow: .1vw -.1vw 1vw white;
      span {
        margin: 0 .8vw;
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
  .nowadays {
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 8vw;
    z-index: 3;
    opacity: 0;
    transition: all 1s;
    &.loaded {
      left: 3vw;
      opacity: 1;
    }
    ._row {
      display: flex;
      align-items: center;
      padding: .5vw 0;
      font-size: 2vw;
      color: $vue-color;
      span {
        text-decoration: underline;
        cursor: pointer;
        margin-left: .8vw;
      }
      i {
        margin: 0 1vw;
        font-size: 2.4vw;
        color: $xkb-primary;
      }
    }
  }
  .chinese {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    position: absolute;
    right: 8vw;
    z-index: 3;
    opacity: 0;
    transition: all 1s;
    &.loaded {
      right: 3vw;
      opacity: 1;
    }
    ._row {
      display: flex;
      align-items: center;
      padding: .5vw 0;
      font-size: 2vw;
      color: $vue-color;
      span {
        text-decoration: underline;
        cursor: pointer;
        margin-left: .8vw;
      }
      i {
        margin: 0 1vw;
        font-size: 2.4vw;
        color: $xkb-primary;
      }
    }
  }
  .become {
    position: absolute;
    top: calc(50vh + 10vw);
    z-index: 3;
    opacity: 0;
    transition: all 1s;
    &.loaded {
      top: calc(50vh + 13vw);
      opacity: 1;
    }
    ._row {
      font-size: 2.2vw;
      color: $vue-color;
      cursor: pointer;
      text-decoration: underline;
    }
  }
  .websites {
    position: absolute;
    z-index: 4;
    width: 30vw;
    transform: translateY(5vh);
    opacity: 0;
    transition: all 1s;
    &.loaded {
      opacity: 1;
      transform: translateY(0);
      cursor: pointer;
    }
  }
  .both {
    position: absolute;
    z-index: 3;
    width: 40vw;
    transform: translateY(-5vh);
    opacity: 0;
    transition: all 1s;
    &.show {
      opacity: 1;
      transform: translateY(0);
      cursor: pointer;
    }
  }
}
</style>