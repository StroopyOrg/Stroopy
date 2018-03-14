<template>
  <wallet-layout>
  
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

              <h4 class="card-title" style="margin-top: 5px;margin-bottom: 5px;">Payments</h4>
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
              <div class="table-responsive" v-if="payments.length > 0">
                <table class="table table-shopping">
                  <tbody>
                    <tr v-for="payment in payments">
                      <td v-if="payment.type === 'payment'" class="td-name" style="line-height: 1;">
                        <a v-if="payment.to === sourcePublicKey" v-bind:href="payment._links.self.href" class="asset-amount wallet-link">{{ payment.from }} </a>
                        <a v-else v-bind:href="payment._links.self.href" class="asset-amount wallet-link">{{ payment.to }} </a>
                        <span v-if="payment.asset_type === 'native'" v-bind:class="[ payment.to === sourcePublicKey ? 'asset-received' : 'asset-sent', 'pull-right']">{{ payment.amount }} XLM</span>
                        <span v-else v-bind:class="[ payment.to === sourcePublicKey ? 'asset-received' : 'asset-sent', 'pull-right']">{{ payment.amount }} {{ payment.asset_code }}</span>
                        <small class="asset-date">{{ payment.created_at }}</small>
                      </td>
                    </tr>
                  </tbody>
                </table></div>
              <div v-else>No Payments Found</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </wallet-layout>
</template>

<script>
  const StellarSdk = require('stellar-sdk');
  import WalletLayout from './Wallet.vue'
  export default {
    components: {
      WalletLayout
    },
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
        page:''
      }
    },
    methods: {
      send: function (event) {
        try {
          jquery('#sendModal .btn').prop('disabled', true);
          if(this.assets[this.asset].asset_type == 'native'){
            var sendAsset = new StellarSdk.Asset('XLM');
          }else{
            var sendAsset = new StellarSdk.Asset(this.assets[this.asset].asset_code, this.assets[this.asset].asset_issuer);
          }

          this.server.loadAccount(sessionStorage.sourcePublicKey)
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
              this.loadAssets();
              this.loadPayments();
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
      }
    },
    mounted: function () {
    
      this.$nextTick(function () {
        jquery("#payments_menu").addClass("active");
        
        this.$root.$on('update_balances', data => {
          this.assets = data;
        });
        
        this.loadPayments();
        
        this.sourcePublicKey = sessionStorage.sourcePublicKey;
        jquery("#receiveModal #address").text(sessionStorage.sourcePublicKey);
        jquery("#receiveModal #address_qr").attr('src','https://api.qrserver.com/v1/create-qr-code/?size=452x452&data=' + sessionStorage.sourcePublicKey);
      })
    }
  }
</script>
