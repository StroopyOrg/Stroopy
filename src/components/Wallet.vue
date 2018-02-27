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
                <p>Assets<b class="caret"></b></p>
              </a>
              
              <div class="collapse show" id="assetslist">
                <ul class="nav">
                  <li>
                    <a href="#">
                      <span class="sidebar-mini-icon">XLM</span>
                      <span class="sidebar-normal">Stellar Lumens</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span class="sidebar-mini-icon">CNY</span>
                      <span class="sidebar-normal">Chinese Yuan</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span class="sidebar-mini-icon">MOBI</span>
                      <span class="sidebar-normal">Mobius</span>
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
              <form>
                  <div class="input-group no-border">
                      <input value="" class="form-control" placeholder="Search..." type="text">
                      <span class="input-group-addon">
                        <i class="now-ui-icons ui-1_zoom-bold"></i>
                      </span>
                  </div>
              </form>
              <ul class="navbar-nav">
				<li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="now-ui-icons users_single-02"></i>
                    <p><span class="d-lg-none d-md-block">Settings</span></p>
                  </a>
                  <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                    <a class="dropdown-item" href="#">Wallet Settings</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div class="panel-header" style="height: 165px;background: #2479A2;background: linear-gradient(90deg,#2479A2 0,#2479A2 60%,#2479A2);">
          <div class="header text-center">
            <h3 class="title">0.00000001 XLM</h3>
          </div>
        </div>
        <div class="content">
          <div class="row">
            <div class="col-md-12">
              <div class="card">
                <div class="card-header">
                  <h4 class="card-title" style="margin-top: 5px;margin-bottom: 5px;">Transactions</h4>
                  <div style="min-width: 230px;">
                    <button class="btn btn-primary btn-round btn-lg">
                      <i class="now-ui-icons arrows-1_minimal-up"></i>
                      Send
                    </button>
                    <button class="btn btn-primary btn-round btn-lg pull-right">
                      <i class="now-ui-icons arrows-1_minimal-down"></i>
                      Receive
                    </button>
                  </div>
                </div>
                <div class="card-body">
                  <div class="table-responsive">
                    <table class="table table-shopping">
                      <tbody>
                        <tr>
                          <td class="td-name" style="line-height: 1;">
                            <a href="#" class="asset-amount">AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</a>
                            <span class="asset-received pull-right">0.00000001</span>
                            <small class="asset-date">January 01, 2018</small>
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

<script src="../assets/js/now-ui-dashboard.min.js"></script>
<style src="../assets/css/now-ui-dashboard.min.css">
