import Vue from 'vue';
import Router from 'vue-router';
import App from './App.vue';
import Wallet from './components/Wallet.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './assets/css/now-ui-kit.css';
import './assets/css/style.css';
import jquery from 'jquery';
window.jquery = jquery;
import 'bootstrap/dist/js/bootstrap.bundle.js';
import './assets/js/now-ui-kit.js';

Vue.use(Router);

const routes = [
  {path: '/', component: App, meta: { title: 'Stroopy | Stellar Wallet For Everyone'}},
  {path: '/wallet', component: Wallet, meta: { title: 'Stroopy | Wallet'}}
];

const router = new Router({
  routes,
  mode: 'history'
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  if(to.path == '/') document.body.className = 'login-page sidebar-collapse';
  if(to.path == '/wallet') document.body.className = 'sidebar-mini';
  next();
});

new Vue({
  el: '#app',
  router,
  data: {
    sourceKeypair: {}
  }
});
