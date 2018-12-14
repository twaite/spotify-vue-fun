import Vue from 'vue';
import App from './app.vue';
import router from './router';
import store from './store';
import SButton from './components/common/s-button.vue';
import SRow from './components/common/s-row.vue';
import SCol from './components/common/s-col.vue';

Vue.config.productionTip = false;

// TODO: TW - programmatically register these
Vue.component('s-button', SButton);
Vue.component('s-row', SRow);
Vue.component('s-col', SCol);

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app');
