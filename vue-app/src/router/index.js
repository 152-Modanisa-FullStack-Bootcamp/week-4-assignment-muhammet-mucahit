import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Watch from "@/views/Watch";
import Favorites from "@/views/Favorites";

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: Home,
    props: true,
  },
  {
    path: "/watch",
    name: "Watch",
    component: Watch,
    props: true
  },
  {
    path: "/favorites/:userid",
    name: "Favorites",
    component: Favorites,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
