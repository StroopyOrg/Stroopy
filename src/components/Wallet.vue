<template>
    <div class="wrapper">
      <div class="sidebar" data-color="orange">
        <div class="logo">
          <a href="/" class="simple-text logo-mini"><img src="../assets/img/logo.png" alt="S"></a>
          <a href="/" class="simple-text logo-normal">Stroopy</a>
          <div class="navbar-minimize">
            <button id="minimizeSidebar" class="btn btn-simple btn-icon btn-neutral btn-round">
              <i class="now-ui-icons text_align-center visible-on-sidebar-regular"></i>
              <i class="now-ui-icons design_bullet-list-67 visible-on-sidebar-mini"></i>
            </button>
          </div>
        </div>
        <div class="sidebar-wrapper">
          <ul class="nav">
            <li>
              <a data-toggle="collapse" href="#assetslist" class="collapsed" aria-expanded="false">
                <i class="now-ui-icons business_money-coins"></i>
                <p>My Assets<b class="caret"></b></p>
              </a>

              <div class="collapse" id="assetslist">
                <ul class="nav">
                  <li v-for="asset in assets">
                    <a href="#">
                      <span v-if="asset.asset_type === 'native'" class="sidebar-mini-icon">XLM</span>
                      <span v-else class="sidebar-mini-icon">{{ asset.asset_code }}</span>
                      <span class="sidebar-normal">{{ asset.balance }}</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            
            <li id="payments_menu">
              <a href="/wallet/payments">
                <i class="now-ui-icons business_bank"></i>
                <p>Payments</p>
              </a>
            </li>
            <li id="operations_menu">
              <a href="/wallet/operations">
                <i class="now-ui-icons ui-2_settings-90"></i>
                <p>Operations</p>
              </a>
            </li>
            <li id="offers_menu">
              <a href="/wallet/offers">
                <i class="now-ui-icons business_briefcase-24"></i>
                <p>Offers</p>
              </a>
            </li>
            <li id="transactions_menu">
              <a href="/wallet/transactions">
                <i class="now-ui-icons loader_refresh"></i>
                <p>Transactions</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      <div class="main-panel">
        <nav class="navbar navbar-expand-lg navbar-absolute bg-primary fixed-top navbar-transparent">
          <div class="container-fluid">
            <div class="navbar-wrapper">
              <div class="navbar-toggle">
				<button type="button" class="navbar-toggler">
				  <span class="navbar-toggler-bar bar1"></span>
				  <span class="navbar-toggler-bar bar2"></span>
				  <span class="navbar-toggler-bar bar3"></span>
				</button>
              </div>
              <a class="navbar-brand" href="#" style="font-weight: 600;">Stroopy</a>
            </div>
            
            <button class="navbar-toggler-custom collapsed" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-bar navbar-kebab"></span>
              <span class="navbar-toggler-bar navbar-kebab"></span>
              <span class="navbar-toggler-bar navbar-kebab"></span>
            </button>
            
            <div class="navbar-collapse justify-content-end collapse" id="navigation">
              <ul class="navbar-nav">
				<li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="now-ui-icons users_single-02"></i>
                    <p><span class="d-lg-none d-md-block">User</span></p>
                  </a>
                  <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                    <a v-on:click="logout" class="dropdown-item" href="#">Logout</a>
                  </div>
                </li>
              </ul>
            </div>
            
          </div>
        </nav>
        <slot></slot>
      </div>
    </div>
</template>

<script>
import '../assets/js/now-ui-dashboard.min.js';
export default {
  data () {
    return {
      assets: ['']
    }
  },
  methods: {
    logout: function (event) {
      sessionStorage.removeItem('sourcePublicKey');
      window.location.href = "/";
    }
  },
  mounted: function () {
  
    var sourcePublicKey = sessionStorage.sourcePublicKey;
    if(!sourcePublicKey){
      window.location.href = "/";
      return false;
    }
    this.loadAssets();
    this.$root.$on('update_balances', data => {
      this.assets = data;
    });
  }
}
</script>

<style src="../assets/css/now-ui-dashboard.min.css"></style>
<style>

.asset-received {
    background-color: rgb(0, 166, 90) !important;
    color: rgb(255, 255, 255) !important;
    font-size: 13px;
    padding: 0.2em 0.6em 0.3em;
    line-height: 1;
    border-radius: 0.25em;
    font-weight: 600;
}

.asset-sent {
    background-color: rgb(212, 79, 50) !important;
    color: rgb(255, 255, 255) !important;
    font-size: 13px;
    padding: 0.2em 0.6em 0.3em;
    line-height: 1;
    border-radius: 0.25em;
    font-weight: 600;
}

.asset-amount {
  width: 245px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  display: inline-block;
}

.wallet-link{
  font-size: 13px;
  color: #0D90C3CC;
  font-weight: 600;
  line-height: 1.5;
}

.asset-date{
  font-weight: 400;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
}

.navbar, .navbar > .container, .navbar > .container-fluid {
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
}

.navbar .navbar-wrapper {
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-align-items: center;
}

.navbar, .navbar > .container, .navbar > .container-fluid {
  -webkit-justify-content: space-between !important;
  -webkit-align-items: center;
}

.navbar > .container, .navbar > .container-fluid {
  -ms-flex-wrap: wrap;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-align: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  -webkit-box-pack: justify;
  -moz-box-pack: justify;
  -ms-flex-pack: justify;
}

.navbar .navbar-toggler-custom {
  padding: .25rem .75rem;
  font-size: 1.25rem;
  line-height: 1;
  background: 0 0;
  border: 1px solid transparent;
  border-radius: .25rem;
  
  width: 37px;
  height: 27px;
  vertical-align: middle;
  outline: 0;
  cursor: pointer;
}

.navbar .navbar-toggler-custom .navbar-toggler-bar.navbar-kebab {
  width: 3px;
  height: 3px;
  border-radius: 50%;
  margin: 0 auto;
}

.navbar .navbar-toggler-bar + .navbar-toggler-bar.navbar-kebab {
  margin-top: 3px;
}

#assetslist a {
  cursor: text;
}

@media screen and (max-width: 768px) {
  h3.title{
    font-size: 1.7em;
  }
}

.form-control{
  border-radius: 0px;
}

.form-control::-webkit-input-placeholder { /* WebKit, Blink, Edge */
    color:#bbbbbb;
}
.form-control:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
   color:#bbbbbb;
}
.form-control::-moz-placeholder { /* Mozilla Firefox 19+ */
   color:#bbbbbb;
}
.form-control:-ms-input-placeholder { /* Internet Explorer 10-11 */
   color:#bbbbbb;
}
.form-control::-ms-input-placeholder { /* Microsoft Edge */
   color:#bbbbbb;
}

.form-control::placeholder { /* Most modern browsers support this now. */
   color:#bbbbbb;
}
</style>
