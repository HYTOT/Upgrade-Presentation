<template>
  <article class="fifth">
    <section class="summary" :class="{ show }">
      <div class="_row _top">I admire Evan a lot because his...</div>
      <div class="_row _top">Braveness drives him ... , but he is always...</div>
      <div class="_row _top">He makes a great contribution to China...</div>
      <img @click="toFirstPage" src="images/summary.jpg">
      <div class="_row _bottom">There are many websites to...</div>
      <div class="_row _bottom">In addition to programming...</div>
      <div class="_row _bottom">Such an inspiring story...</div>
    </section>
  </article>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import VueRouter, { Route } from 'vue-router'

@Component
export default class Fifth extends Vue {

  declare $route: Route
  declare $router: VueRouter

  private show:boolean = false
  private navItems:Array<{ id:number, path:string }> = [
    { id: 1, path: '/first' },
    { id: 2, path: '/second' },
    { id: 3, path: '/third' },
    { id: 4, path: '/fourth' },
  ]

  private toFirstPage():void {
    let i = 0
    while (this.navItems.length) {
      const item:{ id:number, path:string } = this.navItems.pop()
      setTimeout(() => this.$router.replace(item.path), i++ * 500)
    }
  }

  private created():void {
    setTimeout(() => this.show = true, 1500)
  }

}
</script>

<style lang="scss" scoped>
.fifth {
  .summary {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    width: 45vw;
    ._row {
      @extend .flexCenter;
      width: 100%;
      padding: .5vw 0;
      font-size: 2vw;
      color: $typescript-color;
      opacity: 0;
      transition: all 1s linear;
      &._top {
        transform: translateX(5vw);
      }
      &._bottom {
        transform: translate(-5vw);
      }
    }
    &.show {
      ._row {
        opacity: 1;
        &._top {
          transform: translateX(0);
        }
        &._bottom {
          transform: translate(0);
        }
      }
    }
    img {
      width: 100%;
      margin: 1vw 0;
      border-radius: 2vw;
      cursor: pointer;
    }
  }
}
</style>