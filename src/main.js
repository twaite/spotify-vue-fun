import Vue from 'vue';
import axios from 'axios';

import App from './app.vue';
import router from './router';
import store from './store';
import SHeader from './components/common/s-header.vue';
import SButton from './components/common/s-button.vue';
import SRow from './components/common/s-row.vue';
import SCol from './components/common/s-col.vue';

Vue.config.productionTip = false;

// TODO: TW - programmatically register these
Vue.component('s-header', SHeader);
Vue.component('s-button', SButton);
Vue.component('s-row', SRow);
Vue.component('s-col', SCol);

const tokenType = window.localStorage.getItem('tokenType');
const token = window.localStorage.getItem('token');
axios.defaults.headers.common['Authorization'] = `${tokenType} ${token}`;

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app');
