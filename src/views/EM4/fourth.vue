<template>
  <article class="fourth">
    <div class="background" :class="{ loaded }"
      style="background-image: url('images/product.jpg');"></div>
    <aside class="product" :class="{ loaded }">
      <div class="_row">Last several years,</div>
      <div class="_row">Vue expanded to <span @click="loaded = true">a complete product...</span></div>
    </aside>
  </article>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Fourth extends Vue {

  private loaded:boolean = false

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
    bottom: 8vw;
    right: 8vw;
    z-index: 2;
    opacity: 1;
    transition: all 1s;
    &.loaded {
      right: 12vw;
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
      font-size: 2.6vw;
      color: white;
      text-shadow: .1vw -.1vw 1vw white;
      span {
        text-decoration: underline;
        cursor: pointer;
        margin-left: 1vw;
      }
    }
  }
}
</style>