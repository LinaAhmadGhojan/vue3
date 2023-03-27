import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HelpView from '../views/HelpView.vue'
import BlogView from '../views/BlogView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/help',
      name: 'help',
      component: HelpView
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogView
    }
  ]
})

export default router
