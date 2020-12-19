<template>
  <article class="second">
    <img class="evan" @click="show = !show" src="images/evan.jpg">
    <img class="vue" :class="{ 'show': show && loaded }" src="images/progressive.png">
    <aside class="info" :class="{ 'show': show && loaded }">
      <div class="_row">
        <i class="iconfont icon-jiaoyudaka"></i>Evan You / 尤雨溪
      </div>
      <div class="_row">
        <i class="iconfont icon-dingwei1"></i>Wuxi, China
      </div>
      <div class="_row">
        <i class="iconfont icon-xueshi"></i>High school (Shanghai, China)
        <br>👉 Higher degrees (US)
      </div>
    </aside>
    <img class="childhood" src="images/childhood.jpg">
    <section class="beginning" :class="{ 'show': !show }">
      <div class="_row">beginning:</div>
      <div class="_row">
        <i class="iconfont icon-ziyuanldpi"></i>get into programming
      </div>
      <div class="_row">
        <i class="iconfont icon-ziyuanldpi1"></i>be interested in playing games
      </div>
      <br><br>
      <div class="_row">majored in:</div>
      <div class="_row">
        <i class="iconfont icon-xueshi"></i>art & art history
      </div>
      <div class="_row">
        <i class="iconfont icon-yiwenwenhaoduihuakuangjiedaxianxing"></i>but he realized that ...
      </div>
      <br><br>
      <div class="_row _after" @click="$router.replace('/third')">afterwards 👉</div>
    </section>
  </article>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Second extends Vue {

  private loaded:boolean = false
  private show:boolean = true

  private created():void {
    setTimeout(() => this.loaded = true, 1500)
  }

}
</script>

<style lang="scss" scoped>
.second {
  word-spacing: .3vw;
  img, .info, .beginning {
    position: absolute;
  }
  img {
    border-radius: 2vw;
  }
  .evan {
    top: 5vw;
    left: 5vw;
    z-index: 2;
    width: 20vw;
    cursor: pointer;
  }
  .vue {
    top: 5vw;
    left: 0;
    width: 60vw;
    opacity: 0;
    transition: all .6s;
    &.show {
      left: 35vw;
      opacity: 1;
    }
  }
  .info {
    top: 5vw;
    left: 5vw;
    opacity: 0;
    transition: all .6s;
    &.show {
      top: 27vw;
      opacity: 1;
    }
    ._row {
      display: flex;
      align-items: center;
      padding: .5vw 0;
      font-size: 2.2vw;
      color: $vue-color;
      i {
        margin: 0 1vw;
        font-size: 2.2vw;
        color: $xkb-primary;
      }
    }
  }
  .childhood {
    bottom: 5vw;
    right: 5vw;
    z-index: 2;
    width: 20vw;
  }
  .beginning {
    opacity: 0;
    transform: translateY(5vh);
    transition: all .6s;
    ._row {
      display: flex;
      align-items: center;
      padding: .5vw 0;
      font-size: 2.2vw;
      color: brown;
      i {
        margin: 0 1vw;
        font-size: 1.8vw;
        &.icon-ziyuanldpi {
          color: $xkb-fail;
        }
        &.icon-ziyuanldpi1 {
          color: $xkb-success;
        }
        &.icon-xueshi {
          font-size: 2.6vw;
          color: $xkb-primary;
        }
        &.icon-yiwenwenhaoduihuakuangjiedaxianxing {
          font-size: 2.5vw;
          color: #34495e;
        }
      }
      &._after {
        color: #323230;
        text-decoration: underline;
        cursor: pointer;
      }
    }
    &.show {
      opacity: 1;
      transform: translateY(0);
    }
  }
}
</style>