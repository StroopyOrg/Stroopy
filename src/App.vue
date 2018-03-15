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
              <a class="nav-link" href="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/security">Security</a>
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
                  <input name="key" id="key" v-model="key" class="form-control" placeholder="Public Key" type="text" style="font-size: 20pt;">
                </div>
              </div>
              <div class="footer text-center">
                <a v-on:click="login" href="#" class="btn btn-primary btn-round btn-lg btn-block" style="font-size: 20pt;">Login</a>
              </div>
              <div class="pull-right">
                <h6>
                  <span style="font-size:10px;">Login safely using only your public key. No need to enter your private key.</span>
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
                <li><a href="https://stellar.org/" target="_blank">Stellar.org</a></li>
                <li><a href="https://github.com/StroopyOrg/Stroopy/blob/master/LICENSE" target="_blank">Apache License 2.0</a></li>
              </ul>
            </nav>
            <div class="copyright">
              ©
              {{ fullyear }}
              <span class="d-none d-sm-inline">
                Made with
                <i class="fa fa-heart" style="color:#f96332;"></i>
                by
                <a v-bind:href="'https://github.com/'+ githubaccount" target="_blank"><b>{{githubaccount}}</b></a>
              </span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
const StellarSdk = require('stellar-sdk');
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
    
      try {
        var sourceKeypair = StellarSdk.Keypair.fromPublicKey(this.key);
        sessionStorage.setItem('sourcePublicKey', sourceKeypair.publicKey());
        window.location.href = "/wallet";
      } catch (e) {
        if (event) event.preventDefault();
      }
    }
  }
}
</script>

<style>

.login-page .card-login {
    max-width:none;
}

.login-page .card-login .logo-container {
    margin-bottom: 20px;
}

.login-page .card-login .input-group:last-child {
    margin-bottom: 0px;
}

.page-header[filter-color="blue"] {
    background: rgba(0, 174, 255);
    /* For browsers that do not support gradients */
    background: -webkit-linear-gradient(90deg, rgba(0, 174, 255), rgb(0, 174, 255));
    /* For Safari 5.1 to 6.0 */
    background: -o-linear-gradient(90deg, rgba(0, 174, 255), rgb(0, 174, 255));
    /* For Opera 11.1 to 12.0 */
    background: -moz-linear-gradient(90deg, rgba(0, 174, 255), rgb(0, 174, 255));
    /* For Firefox 3.6 to 15 */
    background: linear-gradient(0deg, rgba(0, 174, 255), rgb(0, 174, 255));
    /* Standard syntax */
}

.sidebar-collapse .navbar-collapse:before {
    background: #f96332;
    /* For browsers that do not support gradients */
    background: -webkit-linear-gradient(#62cbfc 0%, #000 80%);
    /* For Safari 5.1 to 6.0 */
    background: -o-linear-gradient(#62cbfc 0%, #000 80%);
    /* For Opera 11.1 to 12.0 */
    background: -moz-linear-gradient(#62cbfc 0%, #000 80%);
    /* For Firefox 3.6 to 15 */
    background: linear-gradient(#62cbfc 0%, #000 80%);
}

.logo-animation{
    animation-name:levitate;
    animation-duration:3s;
    animation-iteration-count:infinite;
    animation-timing-function:ease-in-out;
    -webkit-animation-name:levitate;
    -webkit-animation-duration:3s;
    -webkit-animation-iteration-count:infinite;
    -webkit-animation-timing-function:ease-in-out;
}

@keyframes levitate{
    50%{transform:rotateZ(-30deg)}
}

@-webkit-keyframes levitate{
  50%{-webkit-transform:rotateZ(-30deg)}
}

sidebar-collapse .navbar .navbar-translate {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  -webkit-justify-content: space-between !important;
  -webkit-align-items: center;
}

.bootstrap-collapse .navbar .navbar-translate {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  -webkit-justify-content: space-between !important;
  -webkit-align-items: center;
}

.burger-menu .navbar .navbar-translate {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  -webkit-justify-content: space-between !important;
  -webkit-align-items: center;
}

.page-header .container>.content-center {
  position: fixed;
}

.sidebar-collapse .navbar .navbar-translate {
        display: -webkit-flex;
        -webkit-justify-content: space-between !important;
        -webkit-align-items: center;
}

.input-group-addon,
.input-group-btn,
.input-group .form-control {
  display: -webkit-flex;
}

.input-group {
  display: -webkit-flex;
}

.input-group .form-control {
      -webkit-flex: 1 1 auto;
}

@media screen and (max-width: 991px) {
  .sidebar-collapse [class*="navbar-expand-"] .navbar-collapse {
        width: 250px;
    }
  .sidebar-collapse #bodyClick {
        right: 250px;
  }
  .nav-open .sidebar-collapse .navbar-translate {
    -webkit-transform: translate3d(-250px, 0, 0);
    -moz-transform: translate3d(-250px, 0, 0);
    -o-transform: translate3d(-250px, 0, 0);
    -ms-transform: translate3d(-250px, 0, 0);
    transform: translate3d(-250px, 0, 0);
  }
}

</style>
