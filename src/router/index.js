import { createRouter, createWebHistory } from 'vue-router'
import Exam from '../components/ExampleForm.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Exam
    },  
  ]
})

export default router
