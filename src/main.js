import Vue from 'vue'
import App from './App.vue'
// 导包
import VueRouter from 'vue-router'
import VueAxios from 'vue-axios'
import axios from 'axios'

// 引入组件
import Results from './components/results.vue'
import Player from './components/player.vue'
import Video from './components/video.vue'
import Comment from './components/comment.vue'


Vue.use(VueRouter)
Vue.use(VueAxios, axios)

// 定义路由
const routes = [
  { path: '/results/:keywords', component: Results },
  { path: '/player/:id', component: Player },
  { path: '/video/:mvid', component: Video },
  { path: '/comment/:id', component: Comment }
]

// 实例化路由
const router = new VueRouter({
  routes, // (缩写) 相当于 routes: routes
  linkActiveClass:'active'
})



new Vue({
  el:'#app',
  router,
  render: h => h(App),
})
