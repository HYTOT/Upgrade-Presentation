<template>
  <article class="second">
    <img class="evan" @click="show = !show" src="images/evan.jpg">
    <img class="vue" :class="{ show }" src="images/progressive.png">
    <section class="info">
      <p class="name"><i class="iconfont icon-jiaoyudaka"></i>Evan You</p>
    </section>
  </article>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Second extends Vue {

  private show:boolean = false

  private created():void {
    setTimeout(() => this.show = true, 1000)
  }

}
</script>

<style lang="scss" scoped>
.second {
  img, .info {
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
    top: 25vw;
    left: 5vw;
    width: 20vw;
    padding: 1vw;
    font-size: 2.5vw;
    i {
      font-size: 2.3vw;
      margin: 0 1vw;
    }
    .name {
      @extend .flexCenter;
      
    }
  }
}
</style>