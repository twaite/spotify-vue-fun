import Vue from 'vue';
import Router from 'vue-router';
import LoginPage from '@/pages/login-page';
import HomePage from '@/pages/home-page';
import { nextTick } from 'q';

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

function parseParams(str) {
  var pieces = str.split("&"), data = {}, i, parts;
  // process each query pair
  for (i = 0; i < pieces.length; i++) {
      parts = pieces[i].split("=");
      if (parts.length < 2) {
          parts.push("");
      }
      data[decodeURIComponent(parts[0])] = decodeURIComponent(parts[1]);
  }
  return data;
}

router.beforeEach((to, from, next) => {
  const hashParams = parseParams(to.hash.replace(/^#/g, ''));
  const storage = window.localStorage;

  if (hashParams.access_token) {
    const expired = new Date();
    expired.setSeconds(expired.getSeconds() + hashParams.expires_in);
    storage.setItem('token', hashParams.access_token);
    storage.setItem('expiresAt', expired);
    storage.setItem('tokenType', hashParams.token_type);
  }

  const loggedIn = storage.getItem('token')
    && new Date(storage.getItem('expiresAt')) > new Date();

  if (loggedIn || to.name === 'login') {
    next();
  } else {
    storage.clear();
    next('/login');
  }
});

export default router;
