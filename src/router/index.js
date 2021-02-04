import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import video from '@/views/video.vue'
import Homevideo from '@/views/Homevideo.vue'
import rankingList from '@/views/rankingList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/video',
    name: 'video',
    component: video
  },
  {
    path: '/Homevideo',
    name: 'Homevideo',
    component: Homevideo
  },
  {
    path: '/rankingList',
    name: 'rankingList',
    component: rankingList
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
