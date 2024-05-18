import Vue from 'vue';
import App from './App.vue';
import router from './router';

//추가
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.prototype.$axios = axios; //prototype에 axios 추가
Vue.prototype.serverHost = 'http://localhost:3000'; //serverHost

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
