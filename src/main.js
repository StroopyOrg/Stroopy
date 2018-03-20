import Vue from 'vue';
import Router from 'vue-router';
import App from './App.vue';
import Payments from './components/Payments.vue';
import Operations from './components/Operations.vue';
import Offers from './components/Offers.vue';
import Transactions from './components/Transactions.vue';
import Security from './components/Security.vue';
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
  {path: '/', component: App, meta: { title: 'Stellar Wallet'}},
  {path: '/wallet', redirect: '/wallet/payments'},
  {path: '/wallet/payments', component: Payments, meta: { title: 'Stroopy | Payments'}},
  {path: '/wallet/operations', component: Operations, meta: { title: 'Stroopy | Operations'}},
  {path: '/wallet/offers', component: Offers, meta: { title: 'Stroopy | Offers'}},
  {path: '/wallet/transactions', component: Transactions, meta: { title: 'Stroopy | Transactions'}},
  {path: '/security', component: Security, meta: { title: 'Stroopy | Security'}}
];

const router = new Router({
  routes,
  mode: 'history'
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  if(to.path == '/') document.body.className = 'login-page sidebar-collapse';
  else if(to.path == '/security') document.body.className = 'landing-page sidebar-collapse';
  else document.body.className = 'sidebar-mini';
  next();
});

const StellarSdk = require('stellar-sdk');

Vue.mixin({
  methods: {
    loadAssets: function(){
      
      return this.server.loadAccount(sessionStorage.sourcePublicKey).then((account) => {
        this.$root.$emit('update_balances', account.balances);
      })
      .catch(function(e) {
        window.location.href = "/";
        return false;
      });
    },
    loadPayments: function(){
      return this.server.payments().forAccount(sessionStorage.sourcePublicKey).limit(10).order('desc').call().then((page) => {
        this.$set(this.$data, 'records', page.records );
        this.$set(this.$data, 'page', page );
      })
      .catch(function (err) {
        console.log(err);
      });
    },
    loadMore: function(event) {
      this.page.next().then((page) => {
        this.$set(this.$data, 'records', this.records.concat(page.records) );
        this.$set(this.$data, 'page', page );
      });
    }
  },
  mounted: function () {
    
    if(ENV == 'development'){
      var server = new StellarSdk.Server('https://horizon-testnet.stellar.org');
      StellarSdk.Network.useTestNetwork();
    }else if(ENV == 'production'){
      var server = new StellarSdk.Server('https://horizon.stellar.org');
      StellarSdk.Network.usePublicNetwork();
    }
    
    this.server = server;
  }
});

new Vue({
  el: '#app',
  router,
  data: {
    sourceKeypair: {}
  }
});
