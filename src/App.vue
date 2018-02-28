<template>

  <div id="app">
    <nav class="navbar navbar-expand-lg fixed-top navbar-transparent " color-on-scroll="400">
      <div class="container">
        <div class="navbar-translate">
          <a class="navbar-brand" href="#" rel="tooltip" title="" data-placement="bottom" target="_blank"></a>
          <button class="navbar-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-bar bar1"></span>
            <span class="navbar-toggler-bar bar2"></span>
            <span class="navbar-toggler-bar bar3"></span>
          </button>
        </div>

        <div class="collapse navbar-collapse justify-content-end" data-nav-image="./assets/img/blurred-image.jpg">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Create Account</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Security</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" rel="tooltip" title="" data-placement="bottom" target="_blank" data-original-title="Open Source Project" v-bind:href="'https://github.com/'+ githubaccount">
                <i class="fa fa-github"></i>
                <p class="d-lg-none d-xl-none">Github</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="page-header" filter-color="blue">
      <div class="page-header-image"></div>
      <div class="container">
        <div class="col-md-4 content-center">
          <div class="card card-login card-plain">
            <form class="form" method="" action="">
              <div class="header header-primary text-center">
                <div class="logo-container">
                  <img class="logo-animation" src="./assets/img/logo.png" alt="">
                </div>
              </div>
              <h1 class="d-none d-sm-inline">Stellar Wallet</h1>
              <div class="content">
                <div class="input-group form-group-no-border input-lg">
                  <span class="input-group-addon">
                    <i class="now-ui-icons objects_spaceship" style="font-size: 20pt;"></i>
                  </span>
                  <input name="key" id="key" v-model="key" class="form-control" placeholder="Secret Key" type="text" style="font-size: 20pt;">
                </div>
              </div>
              <div class="footer text-center">
                <a v-on:click="login" href="" class="btn btn-primary btn-round btn-lg btn-block" style="font-size: 20pt;">Login</a>
              </div>
              <div class="pull-right">
                <h6>
                  <span style="font-size:10px;">Don't Worry. Your Secret Key will never be sent or stored anywhere.</span>
                </h6>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="d-none d-sm-inline">
        <footer class="footer">
          <div class="container">
            <nav>
              <ul>
                <li><a href="https://stellar.org/">Stellar.org</a></li>
                <li><a href="#">Apache License 2.0</a></li>
              </ul>
            </nav>
            <div class="copyright">
              ©
              {{ fullyear }}
              <span class="d-none d-sm-inline">
                Made with
                <i class="fa fa-heart" style="color:#f96332;"></i>
                by
                <a v-bind:href="'https://github.com/'+ githubaccount"><b>{{githubaccount}}</b></a>
              </span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import Router from 'vue-router';
import Wallet from './components/Wallet';
export default {
  name: 'app',
  data () {
    return {
      githubaccount: 'StroopyOrg',
      fullyear: new Date().getFullYear(),
      key: ''
    }
  },
  methods: {
    login: function (event) {
        
      //console.log(this.key);
      this.$router.push('/wallet');
    }
  },
  components: {
    Wallet
  }
}
</script>
