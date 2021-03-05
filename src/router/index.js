import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import OrgProfile from '../views/OrganizationProfile.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/org/:id/details', 
    component: OrgProfile,
    name: 'Profile'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach( (to, from, next) => {
  from;
  console.log(to.params);
  next();
  
});
export default router
