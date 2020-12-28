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
        <i class="iconfont icon-ziyuanldpi1"></i>more interested in playing games
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
  img, .info, .beginning {
    position: absolute;
  }
  img {
    border-radius: 1vw;
  }
  .evan {
    top: 3vw;
    left: 3vw;
    z-index: 2;
    width: 14vw;
    cursor: pointer;
  }
  .vue {
    top: 3vw;
    right: 50vw;
    height: 14vw;
    opacity: 0;
    transition: all .6s;
    &.show {
      right: 3vw;
      opacity: 1;
    }
  }
  .info {
    top: 3vw;
    left: 3vw;
    opacity: 0;
    transition: all .6s;
    &.show {
      top: 20vw;
      opacity: 1;
    }
    ._row {
      display: flex;
      align-items: center;
      padding: .5vw 0;
      font-size: 1.8vw;
      color: $vue-color;
      i {
        margin: 0 1vw;
        font-size: 1.8vw;
        color: $xkb-primary;
      }
    }
  }
  .childhood {
    bottom: 3vw;
    right: 3vw;
    z-index: 2;
    width: 14vw;
  }
  .beginning {
    opacity: 0;
    transform: translateY(5vh);
    transition: all .6s;
    ._row {
      display: flex;
      align-items: center;
      padding: .5vw 0;
      font-size: 1.8vw;
      color: $xkb-teacher;
      i {
        margin: 0 1vw;
        font-size: 1.4vw;
        &.icon-ziyuanldpi {
          color: $xkb-fail;
        }
        &.icon-ziyuanldpi1 {
          color: $xkb-success;
        }
        &.icon-xueshi {
          font-size: 2vw;
          color: $xkb-primary;
        }
        &.icon-yiwenwenhaoduihuakuangjiedaxianxing {
          font-size: 1.9vw;
          color: $typescript-color;
        }
      }
      &._after {
        color: $typescript-color;
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