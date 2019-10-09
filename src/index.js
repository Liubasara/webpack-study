import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'

import './assets/css/base.scss'

Vue.use(Router)

var router = new Router({
  routes: [{
    path: '/',
    component: () => import('./views/HomePage.vue')
  }]
})

new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')
