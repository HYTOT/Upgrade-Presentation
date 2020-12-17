import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Component from 'vue-class-component'

Vue.config.productionTip = false

/**
 * 注册路由内部钩子函数
 */
Component.registerHooks([
  'beforeRouteEnter',
  'beforeRouteLeave',
  'beforeRouteUpdate',
])

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
