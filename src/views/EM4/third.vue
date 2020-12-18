<template>
  <article class="third" :class="{ loaded }">
    <section class="js">
      <img @click="loaded = true" src="images/js.jpg">
      <div class="_reason">convenient to share things</div>
      <div class="_job">
        <i class="iconfont icon-kaifazhong"></i>...<i class="iconfont icon-code"></i>...<i class="iconfont icon-centericjob"></i>
      </div>
    </section>
    <img class="work" :class="{ 'show': loaded }" @click="show = !show" src="images/work.jpg">
    <aside class="info" :class="{ 'show': show && loaded }">
      <div class="_row">
        Evan You<i class="iconfont icon-zuoxixingming"></i>
      </div>
      <div class="_row">
        Google Creative Lab<i class="iconfont icon-centericjob"></i>
      </div>
    </aside>
    <h1 @click="loaded = false" v-show="loaded">Back</h1>
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
  font-style: italic;
  word-spacing: .3vw;
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
    width: 50vw;
    height: 40vw;
    padding: 3vw;
    background: #323230;
    border-radius: 3vw;
    overflow: hidden;
    transition: all 1s;
    img {
      width: 30vw;
      cursor: pointer;
    }
    ._reason {
      font-size: 3vw;
      color: #f6e58d;
    }
    ._job {
      color: white;
      i {
        margin: 0 1vw;
        font-size: 3vw;
        color: #ff7979;
      }
    }
  }
  .work {
    position: absolute;
    top: 7vw;
    z-index: 2;
    right: 7vw;
    width: 30vw;
    border-radius: 2vw;
    opacity: 0;
    transition: all 1s;
    &.show {
      top: 5vw;
      right: 5vw;
      opacity: 1;
      cursor: pointer;
    }
  }
  .info {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    position: absolute;
    top: 5vw;
    right: 5vw;
    opacity: 0;
    transition: all 1s;
    &.show {
      top: 25vw;
      opacity: 1;
    }
    ._row {
      display: flex;
      align-items: center;
      padding: .5vw 0;
      font-size: 2.2vw;
      color: #218c74;
      i {
        margin: 0 1vw;
        font-size: 3vw;
        color: $xkb-primary;
      }
    }
  }
  h1 {
    position: absolute;
    top: 5vw;
    left: 5vw;
  }
}
</style>