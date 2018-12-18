import Vue from 'vue';
import Router from 'vue-router';
import LoginPage from '@/pages/login-page';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
});

// function getHashParams() {

//   var hashParams = {};
//   var e,
//       a = /\+/g,  // Regex for replacing addition symbol with a space
//       r = /([^&;=]+)=?([^&;]*)/g,
//       d = function (s) { return decodeURIComponent(s.replace(a, " ")); },
//       q = window.location.hash.substring(1);

//   while (e = r.exec(q))
//     hashParams[d(e[1])] = d(e[2]);

//   return hashParams;
// }

// router.beforeEach((to) => {
  
// });

export default router;
