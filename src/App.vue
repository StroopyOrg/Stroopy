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
              <a class="nav-link" href="/">หน้าแรก</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/security">ความปลอดภัย</a>
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
                <a v-on:click="login" href="#" class="btn btn-primary btn-round btn-lg btn-block" style="font-size: 20pt;">เข้าสู่ระบบ</a>
              </div>
              <div class="pull-right">
                <h6>
                  <span style="font-size:14px;">การเข้าสู่ระบบนี้มีความปลอดภัย ซึ่งจะใช้แค่ public key กรุณาอย่านำ private key มากรอก</span>
                </h6>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="d-none d-sm-inline">
        <footer class="footer">
          <div class="container">
            <div class="copyright">
              ©
              {{ copyright }}
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
      copyright: 'DOMECLOUD',
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
<style lang="css">
@import './assets/css/app.css';
</style>
