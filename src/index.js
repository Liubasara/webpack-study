import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'

import './assets/css/base.scss'

Vue.use(Router)

var router = new Router({
  routes: [{
    path: '/',
    component: function () {return import('./views/HomePage.vue')}
  }]
})

new Vue({
  router: router,
  render: function (h) { return h(App) }
}).$mount('#app')
