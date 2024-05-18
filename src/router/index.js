import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from '../views/Home.vue';
import ResultPage from '../views/Result.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: '/result',
    name: 'ResultPage',
    component: ResultPage,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
