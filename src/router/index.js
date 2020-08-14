import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () =>import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/resize',
    name: 'Resize',
    component: () => import(/* webpackChunkName: "resize" */'../views/pages/Resize.vue')
  },
  {
    path: '/base64',
    name: 'Base64',
    component: () => import(/* webpackChunkName: "resize" */'../views/pages/Base64.vue')
  },
  {
    path: '/htmlminify',
    name: 'Htmlminify',
    component: () => import(/* webpackChunkName: "resize" */'../views/pages/Htmlminify.vue')
  },
  {
    path: '/qrcode',
    name: 'QRCode',
    component: () => import(/* webpackChunkName: "resize" */'../views/pages/qrcode.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
