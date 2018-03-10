<template>
    <div class="wrapper">
      <div class="sidebar" data-color="orange">
        <div class="logo">
            <a href="/" class="simple-text logo-mini"><img src="../assets/img/logo.png"></a>

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
              <a data-toggle="collapse" href="#assetslist" class="" aria-expanded="true">
                <i class="now-ui-icons business_money-coins"></i>
                <p>My Assets<b class="caret"></b></p>
              </a>
              
              <div class="collapse show" id="assetslist">
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
              <!--
              <form>
                  <div class="input-group no-border">
                      <input value="" class="form-control" placeholder="Search..." type="text">
                      <span class="input-group-addon">
                        <i class="now-ui-icons ui-1_zoom-bold"></i>
                      </span>
                  </div>
              </form>
              -->
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
        <div class="panel-header" style="height: 165px;background: #2479A2;background: linear-gradient(90deg,#2479A2 0,#2479A2 60%,#2479A2);">
          <div class="header text-center">
            <h3 class="title">
              {{ assets[0].balance }} <span v-if="assets[0].asset_type === 'native'">XLM</span><span v-else>{{ assets[0].asset_code }}</span>
            </h3>
          </div>
        </div>
        <div class="content">
          <div class="row">
            <div class="col-md-12">
              <div class="card">
                <div class="card-header">
                
                  <div class="modal fade" id="sendModal">
                    <div class="modal-dialog modal-sm">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h4 class="modal-title" style="margin: 0px;">Send Money</h4>
                          <button type="button" class="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div class="modal-body">
                          <div id="sendError" class="alert alert-danger" role="alert" style="display:none;"></div>
                          <form>
                            <div class="form-group">
                              <label for="destination">Destination</label>
                              <input v-model="destination" class="form-control" id="destination" placeholder="GASOCNHNNLYFNMDJYQ3XFMI7BYHIOCFW3GJEOWRPEGK2TDPGTG2E5EDW" type="text">
                            </div>
                            <div class="form-group">
                              <label for="amount">Amount</label>
                              <input v-model="amount" class="form-control" id="amount" placeholder="10" type="text">
                            </div>
                            <div class="form-group">
                              <label for="asset">Asset</label>
                              <select v-model="asset" class="form-control" id="asset">
                                <option v-for="(asset,index) in assets" v-if="asset.asset_type === 'native'" :value="index">XLM</option>
                                <option v-else>{{ asset.asset_code }}</option>
                              </select>
                            </div>
                            <div class="form-group">
                              <label for="secretkey">Secret Key</label>
                              <input v-model="secretkey" class="form-control" id="secretkey" placeholder="SAKRB7EE6H23EF733WFU76RPIYOPEWVOMBBUXDQYQ3OF4NF6ZY6B6VLW" type="text">
                            </div>
                            <button v-on:click="send" type="submit" class="btn btn-primary">Send</button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="modal fade" id="receiveModal">
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h4 class="modal-title" style="margin: 0px;">Receive Money</h4>
                          <button type="button" class="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div class="modal-body">
                          <img id="address_qr" style="width: 100%;" src="" alt="public address">
                          <b>My Address: </b>
                          <span id="address" class="badge badge-pill badge-default" style="font-size: 11px; width: 100%; font-weight: 600; white-space: initial;"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  
                  <h4 class="card-title" style="margin-top: 5px;margin-bottom: 5px;">Transactions</h4>
                  <div style="min-width: 230px;">
                    <button class="btn btn-primary btn-round btn-lg" data-toggle="modal" data-target="#sendModal">
                      <i class="now-ui-icons arrows-1_minimal-up"></i>
                      Send
                    </button>
                    <button class="btn btn-primary btn-round btn-lg pull-right" data-toggle="modal" data-target="#receiveModal">
                      <i class="now-ui-icons arrows-1_minimal-down"></i>
                      Receive
                    </button>
                  </div>
                </div>
                <div class="card-body">
                  <div class="table-responsive">
                    <table class="table table-shopping">
                      <tbody>
                        <tr v-for="payment in payments">
                          <td v-if="payment.type === 'payment'" class="td-name" style="line-height: 1;">
                            <a v-if="payment.to === sourcePublicKey" href="#" class="asset-amount">{{ payment.from }} </a>
                            <a v-else href="#" class="asset-amount">{{ payment.to }} </a>
                            <span v-if="payment.asset_type === 'native'" v-bind:class="[ payment.to === sourcePublicKey ? 'asset-received' : 'asset-sent', 'pull-right']">{{ payment.amount }} XLM</span>
                            <span v-else v-bind:class="[ payment.to === sourcePublicKey ? 'asset-received' : 'asset-sent', 'pull-right']">{{ payment.amount }} {{ payment.asset_code }}</span>
                            <small class="asset-date">{{ payment.created_at }}</small>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import '../assets/js/now-ui-dashboard.min.js';

const StellarSdk = require('stellar-sdk');

export default {
  data () {
    return {
      server: '',
      assets: [''],
      payments: [],
      sourcePublicKey: '',
      destination: '',
      amount: '',
      asset: '0',
      secretkey: '',
    }
  },
  methods: {
    logout: function (event) {
      sessionStorage.removeItem('sourcePublicKey');
      window.location.href = "/";
    },
    send: function (event) {
    
      try {
        jquery('#sendModal .btn').prop('disabled', true);
        if(this.assets[this.asset].asset_type == 'native'){
          var sendAsset = new StellarSdk.Asset('XLM');
        }else{
          var sendAsset = new StellarSdk.Asset(this.assets[this.asset].asset_code, this.assets[this.asset].asset_issuer);
        }
        
        this.server.loadAccount(this.sourcePublicKey)
        .then((account) => {
          var transaction = new StellarSdk.TransactionBuilder(account)
          .addOperation(StellarSdk.Operation.payment({
            destination: this.destination,
            asset: sendAsset,
            amount: String(this.amount)
          }))
          .build();
          
          var sourceKeypair = StellarSdk.Keypair.fromSecret(String(this.secretkey));
          transaction.sign(sourceKeypair);
          
          return this.server.submitTransaction(transaction)
          .then((transactionResult) => {
            this.loadAccountDetails();
            jquery("#sendError").text('');
            jquery("#sendError").hide()
            jquery('#sendModal').modal('hide');
            return jquery('#sendModal .btn').prop('disabled', false);
          })
          .catch(function(e) {
            jquery("#sendError").text(e.message);
            jquery("#sendError").show()
            return jquery('#sendModal .btn').prop('disabled', false);
          });
        })
        .catch(function(e) {
          jquery("#sendError").text(e.message);
          jquery("#sendError").show()
          return jquery('#sendModal .btn').prop('disabled', false);
        });
      } catch (e) {
        jquery("#sendError").text(e.message);
        jquery("#sendError").show()
        return jquery('#sendModal .btn').prop('disabled', false);
      }
      
      if (event) event.preventDefault();
    },
    loadAccountDetails: function(){
    
      return this.server.loadAccount(this.sourcePublicKey).then((account) => {
        this.$set(this.$data, 'assets', account.balances );
      }).then(() => {
      
          return this.server.payments()
      .forAccount(this.sourcePublicKey)
      .limit(50)
      .order('desc')
      .call()
      .then((page) => {
         this.$set(this.$data, 'payments', page.records );
      })
      .catch(function (err) {
          console.log(err);
      });
      
      
      })
      .catch(function(e) {
        window.location.href = "/";
        return false;
      });
      
      
      
    }
  },
  mounted: function () {
    
    this.$nextTick(function () {
      var sourcePublicKey = sessionStorage.sourcePublicKey;
      this.sourcePublicKey = sourcePublicKey;
      if(!sourcePublicKey){
        window.location.href = "/";
        return false;
      }
      
      if(ENV == 'development'){
        var server = new StellarSdk.Server('https://horizon-testnet.stellar.org');
        StellarSdk.Network.useTestNetwork();
      }else if(ENV == 'production'){
        var server = new StellarSdk.Server('https://horizon.stellar.org');
        StellarSdk.Network.usePublicNetwork();
      }
      
      this.server = server;
      this.loadAccountDetails();
      
      jquery("#receiveModal #address").text(sourcePublicKey);
      jquery("#receiveModal #address_qr").attr('src','https://api.qrserver.com/v1/create-qr-code/?size=452x452&data=' + sourcePublicKey);
    })
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

.asset-amount{
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 245px;
  display: inline-block;
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

.off-canvas-sidebar .nav li > a, .sidebar .nav li > a {
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
