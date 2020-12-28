<template>
  <article class="fifth">
    <section class="summary" :class="{ show }">
      <div class="_row _top">I admire Evan a lot because...</div>
      <div class="_row _top">He makes a great contribution to...</div>
      <img @click="toFirstPage" src="images/summary.jpg">
      <div class="_row _bottom">There are many websites to know...</div>
      <div class="_row _bottom">In addition to programming...</div>
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
  private routes:Array<{ id:number, path:string }> = [
    { id: 1, path: '/first' },
    { id: 2, path: '/second' },
    { id: 3, path: '/third' },
    { id: 4, path: '/fourth' },
  ]

  private toFirstPage():void {
    const routes = this.routes
    routes.forEach((route:{ id:number, path:string }) => {
      setTimeout(() => this.$router.replace(route.path), (routes.length - route.id) * 500)
    })
  }

  private created():void {
    setTimeout(() => this.show = true, 1500)
  }

}
</script>

<style lang="scss" scoped>
.fifth {
  .summary {
    position: absolute;
    width: 40vw;
    ._row {
      padding: .5vw 0;
      font-size: 1.8vw;
      color: $xkb-teacher;
      opacity: 0;
      transition: all 1.5s;
      &._top {
        transform: translate(20vw, 10vw);
      }
      &._bottom {
        text-align: right;
        transform: translate(-20vw, -10vw);
      }
    }
    &.show {
      ._row {
        opacity: 1;
        &._top {
          transform: translateX(0);
        }
        &._bottom {
          transform: translateX(0);
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