import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)
import Home from "@/views/Home.vue"
import User from "@/views/User.vue"
import Main from "@/views/Main.vue"
import Mall from "@/views/Mall.vue"
import PageOne from "@/views/PageOne.vue"
import PageTwo from "@/views/PageTwo.vue"
const routes = [
  {
    path: '/',
    component: Main,
    redirect:'home',
    children: [
      {//首页
        name:'home',
        path: 'home',
        component: Home
      },
      {//用户管理
        name:'user',
        path: 'user',
        component: User
      },
      {//商品管理
        name:'mall',
        path: 'mall',
        component: Mall
      },
      {//页面1
        name:'page1',
        path: 'page1',
        component: PageOne
      },
      {//页面2
        name:'page2',
        path: 'page2',
        component: PageTwo
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
