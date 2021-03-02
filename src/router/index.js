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
    // children: [
    //   {
    //     // UserProfile will be rendered inside User's <router-view>
    //     // when /user/:id/profile is matched
    //     path: 'details',
    //     component: OrgProfile
    //   },
    //   {
    //     // UserPosts will be rendered inside User's <router-view>
    //     // when /user/:id/posts is matched
    //     path: 'posts',
    //     component: UserPosts
    //   }
    // ]

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
