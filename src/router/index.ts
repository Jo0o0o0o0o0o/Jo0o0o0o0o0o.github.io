import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Project1 from '@/views/Project1.vue'
import Project2 from '../views/Project2.vue'
import Project3 from '@/views/Project3.vue'
import Project4 from '@/views/Project4.vue'
import Project5 from '@/views/Project5.vue'
import Project6 from '@/views/Project6.vue'
import Project7 from '@/views/Project7.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/project1',
      name: 'project1',
      component: Project1,
    },
    {
      path: '/project2',
      name: 'project2',
      component: Project2,
    },
    {
      path: '/project3',
      name: 'project3',
      component: Project3,
    },
    {
      path: '/project4',
      name: 'project4',
      component: Project4,
    },
    {
      path: '/project5',
      name: 'project5',
      component: Project5,
    },
    {
      path: '/project6',
      name: 'project6',
      component: Project6,
    },
    {
      path: '/project7',
      name: 'project7',
      component: Project7,
    },
  ],
})

export default router
