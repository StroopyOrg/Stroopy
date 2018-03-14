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
              <h4 class="card-title">Transactions</h4>
            </div>
            <div class="card-body">
              <div class="table-responsive" v-if="transactions.length > 0">
                <table class="table">
                  <thead class=" text-primary">
                    <tr>
                      <th>Id</th>
                      <th>Fee</th>
                      <th>Operations</th>
                      <th>Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(transaction,index) in transactions">
                      <td><a class="wallet-link" v-bind:href="transaction._links.self.href">{{transaction.id}}</a></td>
                      <td>{{transaction.fee_paid}}</td>
                      <td>{{transaction.operation_count}}</td>
                      <td>{{transaction.created_at}}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div v-else>No Transactions Found</div>
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
        transactions: []
      }
    },
    components: {
      WalletLayout
    },
    mounted: function () {
    
      this.$nextTick(function () {
        jquery("#transactions_menu").addClass("active");
        
        this.server.transactions().forAccount(sessionStorage.sourcePublicKey).order("desc").limit(50).call()
        .then((transactions) => {
        console.log(transactions.records);
          this.$set(this.$data, 'transactions', transactions.records );
        })
        .catch(function(e) {
        });
      })
    }
  }
</script>
