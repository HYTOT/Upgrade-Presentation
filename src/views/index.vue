<template>
  <article class="index">
    <i class="iconfont icon-angle-right pre-page" @click="switchPage('-')"
      :class="{ '_hidden': currentPage <= ROUTES[0].id }"></i>
    <i class="iconfont icon-angle-right next-page" @click="switchPage('+')"
      :class="{ '_hidden': currentPage >= ROUTES[ROUTES.length-1].id }"></i>
    <transition :name="transitionName">
      <router-view />
      <!-- <keep-alive>
      </keep-alive> -->
    </transition>
  </article>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator'
import VueRouter, { Route } from 'vue-router'

@Component
export default class Index extends Vue {

  declare $route: Route
  declare $router: VueRouter

  // 用于表示路由组件过渡动画的方向
  private transitionName:string = ''
  private currentPage:number = 0
  private readonly ROUTES:Array<{ id:number, path:string }> = [
    { id: 1, path: '/first' },
    { id: 2, path: '/second' },
    { id: 3, path: '/third' },
    { id: 4, path: '/fourth' },
    { id: 5, path: '/fifth' },
  ]

  private switchPage(type:'-' | '+' = '+'):void {
    this.currentPage += type === '-' ? -1 : 1
    const path = this.ROUTES.find((route:{ id:number, path:string }) => route.id === this.currentPage)?.path
    path && path !== this.$route.path && this.$router.replace(path)
  }

  // 判断路由组件 index 值，动态改变过渡动画方向
  @Watch('$route')
  private watchRoute(to:Route, from:Route) {
    this.currentPage = to.meta.index
    this.transitionName = `slide-${
      to.meta.index > from.meta.index
        ? 'top'
        : 'bottom'
      }`
  }

  private mounted():void {
    setTimeout(() => {
      this.currentPage = 0
      this.switchPage('+')
    }, 600)
  }

}
</script>

<style lang="scss" scoped>
.index {
  font-style: italic;
  background: #fff;
  box-shadow: 0 0 15vw burlywood inset;
  .pre-page, .next-page {
    position: fixed;
    left: 48vw;
    z-index: 5;
    font-size: 4vw;
    color: brown;
    opacity: .3;
    transition: all 1s;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
  }
  .pre-page {
    top: 1vh;
    transform: rotate(-90deg);
    &._hidden {
      opacity: 0;
      cursor: auto;
      transform: rotate(-90deg) translate(-10vh);
    }
  }
  .next-page {
    bottom: 1vh;
    transform: rotate(90deg);
    &._hidden {
      opacity: 0;
      cursor: auto;
      transform: rotate(90deg) translate(-10vh);
    }
  }
}
</style>