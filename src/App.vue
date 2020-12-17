<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view />
    </transition>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator'
import { Route } from 'vue-router'

@Component
export default class App extends Vue {

  // 用于表示路由组件过渡动画的方向
  private transitionName:string = ''

  // 判断路由组件 index 值，动态改变过渡动画方向
  @Watch('$route')
  private watchRoute(to:Route, from:Route) {
    this.transitionName = `slide-${
      to.meta.index > from.meta.index
        ? 'top'
        : 'bottom'
      }`
  }

}
</script>

<style lang="scss">
#app {
  background: #fff;
  //转场动画
  .slide-bottom-enter-active,
  .slide-bottom-leave-active,
  .slide-top-enter-active,
  .slide-top-leave-active {
    transition: all 1s;
    position: fixed;
  }
  .slide-top-enter,
  .slide-bottom-enter,
  .slide-top-leave-to,
  .slide-bottom-leave-to {
    opacity: 0;
  }
  .slide-top-enter {
    transform: translateY(30vh);
    transition-timing-function: ease-in;
  }
  .slide-top-leave-to {
    transform: translateY(-25vh);
    transition-timing-function: ease-out;
  }
  .slide-bottom-enter {
    transform: translateY(-30vh);
    transition-timing-function: ease-in;
  }
  .slide-bottom-leave-to {
    transform: translateY(25vh);
    transition-timing-function: ease-out;
  }
}
</style>
