import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/questionnare',
      name: 'question',
      component: () => import('../views/QuestionView.vue'),
    },
   {
  path: '/result-questionnare',
  name: 'result',
  component: () => import('../views/ResutlView.vue'),
},

  ],
})

export default router
