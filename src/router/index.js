import { createRouter, createWebHistory } from 'vue-router'
import HomeEn from '../views/HomeEn.vue'
import HomeCn from '../views/HomeCn.vue'
import HomeJp from '../views/HomeJp.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeEn
  },
  {
    path: '/cn',
    name: 'cn',
    component: HomeCn
  },
   {
    path: '/jp',
    name: 'jp',
    component: HomeJp
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
