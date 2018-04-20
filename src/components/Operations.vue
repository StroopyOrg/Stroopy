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
              <h4 class="card-title">การดำเนินการต่างๆ</h4>
            </div>
            <div class="card-body">
              <div v-if="records.length > 0">
                <div class="table-responsive">
                  <table class="table">
                    <thead class=" text-primary">
                      <tr>
                        <th>ประเภท</th>
                        <th>จำนวน</th>
                        <th>เวลา</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(operation,index ) in records" v-bind:key="index">
                        <td><a class="wallet-link" v-bind:href="operation._links.self.href">{{operation.type}}</a></td>
                        <td>{{operation.amount}}</td>
                        <td>{{operation.created_at}}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <button v-on:click="loadMore" class="btn btn-block btn-primary btn-round btn-simple">เพิ่มเติม</button>
              </div>
              <div v-else>No Operations Found</div>
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
        jquery("#operations_menu").addClass("active");
        
        this.server.operations().forAccount(sessionStorage.sourcePublicKey).order("desc").limit(10).call()
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
