<template>
  <wallet-layout>
  
    <div class="panel-header" style="height: 165px;background: #2479A2;background: linear-gradient(90deg,#2479A2 0,#2479A2 60%,#2479A2);">
      <div class="header text-center">
        <h3 class="title">
          
        </h3>
      </div>
    </div>
    
    <div class="content">
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header">
              <h4 class="card-title">ข้อเสนอ</h4>
            </div>
            <div class="card-body">
              <div v-if="records.length > 0">
                <div class="table-responsive">
                  <table class="table">
                    <thead class=" text-primary">
                      <tr>
                        <th>Sell</th>
                        <th>Buy</th>
                        <th>Amount</th>
                        <th>Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(offer,index) in records" v-bind:key="index">
                        <td v-if="offer.selling.asset_type === 'native'">XLM</td>
                        <td v-else>{{offer.selling.asset_code}}</td>
                        <td v-if="offer.buying.asset_type === 'native'">XLM</td>
                        <td v-else>{{offer.buying.asset_code}}</td>
                        <td>{{offer.amount}}</td>
                        <td>{{offer.price}}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <button v-on:click="loadMore" class="btn btn-block btn-primary btn-round btn-simple">More</button>
              </div>
              <div v-else>No Offers Found</div>
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
    data () {
      return {
        records: [],
        page: ''
      }
    },
    components: {
      WalletLayout
    },
    mounted: function () {
    
      this.$nextTick(function () {
        jquery("#offers_menu").addClass("active");
        
        this.server.offers('accounts', sessionStorage.sourcePublicKey).order("desc").limit(10).call()
        .then((page) => {
          this.$set(this.$data, 'records', page.records );
          this.$set(this.$data, 'page', page );
        })
        .catch(function(e) {
        });
      })
    }
  }
</script>
