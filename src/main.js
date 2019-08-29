import Vue from 'vue'
import App from './App.vue'
// 导包
import VueRouter from 'vue-router'
import VueAxios from 'vue-axios'
import axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


// 引入组件
import Results from './components/results.vue'
import Player from './components/player.vue'
import Video from './components/video.vue'
import Comment from './components/comment.vue'
import Sider from './components/sider.vue'


Vue.use(ElementUI);
Vue.use(VueRouter)
Vue.use(VueAxios, axios)
// 基地址
axios.defaults.baseURL = 'https://autumnfish.cn';
// 定义路由
const routes = [
  { path: '/sider', component: Sider },
  // 将组件地址重定向到起始地址'/'
  { path: '/', redirect: '/sider' },
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
