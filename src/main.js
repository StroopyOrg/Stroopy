import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'now-ui-kit/assets/css/now-ui-kit.css';
import './assets/css/style.css';

import jquery from 'jquery';
window.jquery = jquery;

import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'now-ui-kit/assets/js/now-ui-kit.js';


new Vue({
  el: '#app',
  computed: {
    title: {
      set(val) {
        document.querySelector('title').innerText = val;
      },
      get(val) {
        return document.querySelector('title').innerText;
      }
    }
  },
  mounted() {
    if (!document.querySelector('title')) {
      let title = document.createElement('title');
      document.head.append(title);
    }
    this.title = 'Stroopy | Your FREE Steller Wallet';
  },
  render: h => h(App)
})
