import Vue from 'vue';
import Router from 'vue-router';
import LoginPage from '@/pages/login-page';
import HomePage from '@/pages/home-page';

import { isLoggedIn, logout, loginFromUrl, setRequestHeaders } from '@/services/auth';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.path === '/auth') {
    loginFromUrl(to.hash);
    next('/');
  } else if (isLoggedIn() || to.name === 'login') {
    setRequestHeaders();
    next();
  } else {
    logout();
    next('/login');
  }
});

export default router;
