import { createRouter, createWebHistory } from 'vue-router'
import GrillaView from '../prestamos/pages/tus-planes/grilla.component.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: GrillaView
    },

  ]
})

export default router
