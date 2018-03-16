<template>
  <div id="app">
  
    <nav class="navbar navbar-expand-lg bg-primary fixed-top navbar-transparent" color-on-scroll="400">
      <div class="container">
        <div class="navbar-translate">
          <a class="navbar-brand" href="#" rel="tooltip" title="" data-placement="bottom" target="_blank"></a>
          <button class="navbar-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-bar bar1"></span>
            <span class="navbar-toggler-bar bar2"></span>
            <span class="navbar-toggler-bar bar3"></span>
          </button>
        </div>

        <div class="collapse navbar-collapse justify-content-end" data-nav-image="../assets/img/blurred-image.jpg">
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
    
    <div class="wrapper">
      <div class="page-header page-header-small">
        <div class="page-header-image" data-parallax="true" style=""></div>
        <div class="container">
          <div class="content-center">
            <h1 class="title">Stroopy Security</h1>
          </div>
        </div>
      </div>
      <div class="section section-about-us">
        <div class="container">
          <div class="row">
            <div class="col-md-12 ml-auto mr-auto text-center">
              <h2 class="title">Protecting Your Assets</h2>
              <h5 class="description">
                When it comes to cryptocurrencies, are you concerned about security? So are we! This page briefly explains some of the measures we have taken to protect your assets.
              </h5>
            </div>
          </div>
          <div class="separator separator-primary"></div>
          <div class="row">
            <div class="col-md-12 ml-auto mr-auto text-center">
              <h3>Public Key</h3>
              <h5 class="description">
                At Stroopy.org you can sign in using your public key instead of your private key. Your public key is the key that everyone is allowed to know. Your private key will only be required if you wish to interact with the Stellar network in a way that requires signing a transaction. In this case your private key will be required and used solely for signing the transaction. Your private key will never be stored anywhere. As a matter of fact your private key will never leave your browser.
              </h5>
              <h3>Open Source</h3>
              <h5 class="description">
                The technology behind Stroopy.org is Open Source and hosted on <a href="https://www.github.com/stroopyorg/stroopy" target="_BLANK">GitHub</a>. This makes it a transparant way of developing software by making the source code available for audit.
              </h5>
            </div>
          </div>

          <div class="section-story-overview">
            <div class="row">
              <div class="col-md-10">
                <div id="security_3" class="image-container image-left"></div>
              </div>
            </div>
          </div>

          <div class="separator separator-primary"></div>
          <div class="row">
            <div class="col-md-12 ml-auto mr-auto text-center">
              <h3>HTTP Strict Transport Security</h3>
              <h5 class="description">
                Stroopy.org uses HSTS which stands for HTTP Strict Transport Security (<a href="https://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security" target="_BLANK">More info</a>). This makes sure your browser always uses secure HTTPS connections
    when communicating with Stroopy.org instead of using the insecure HTTP protocol. Our SSL certificate takes care of securing your connection.
    This in turn prevents a hacker from redirecting traffic over an insecure connection.
              </h5>
            </div>
          </div>

          <div class="section-story-overview">
            <div class="row">
              <div class="col-md-10">
                <div id="security_1" class="image-container image-left"></div>
              </div>
            </div>
          </div>

          <div class="separator separator-primary"></div>
            <div class="row">
              <div class="col-md-12 ml-auto mr-auto text-center">
                <h3>What happens in case we ever get hacked?</h3>
                <h5 class="description">
                  In case Stroopy.org ever gets hacked, the hacker will have to use a secure connection for the hacked version of Stroopy.org, as your browser has been instructed to only allow communication to Stroopy.org over the HTTPS protocol.
    In case the hacker uses a self-signed certificate for this secure connection, your browser will respond showing a warning. 
                </h5>
                <h5 class="description">
                  In case the hacker uses a signed certificate from a Certificate Authority (CA) we will be notified through continually monitoring all the Certificate Transparency (CT) <a href="https://crt.sh/?q=stroopy.org" target="_BLANK">logs</a></h5>
    <h5 class="description">
    CT logs keep track of all certificates issued by CAs. In case a suspicious certificate is ever issued for Stroopy.org, we will be able to take immediate action to protect our users.
                  </h5>
                </div>
              </div>

              <div class="section-story-overview">
              <div class="row">
                <div class="col-md-10">
                  <div id="security_2" class="image-container image-left"></div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-12 ml-auto mr-auto text-center">
                <h3>Code Base and Deployment</h3>
                <h5 class="description">
                  We have also taken steps to protect our code base and deployment channels to prevent malicious code from reaching our servers. In an effort to prevent misuse of information, we cannot disclose information about these steps.
                </h5>
              </div>
            </div>

            <div class="separator separator-primary"></div>
            <div class="row">
              <div class="col-md-12 ml-auto mr-auto text-center">
              <h3>So, what's next?</h3>
              <h5 class="description">
                Next we will be adding support for HSTS preload, which will force the browser to use https even the first time visiting Stroopy.org and not just after Stroopy.org has instructed your browser to do so.
    We will also be adding a CAA record to our DNS, which will prevent a hacker from even being able to get a signed certificate for Stroopy.org, as the CAs will check this record and deny the request.
    Later on we will also include the “expect-ct” header which will tell your browser to only allow certificates that appear in the CT logs. This will prevent a hacker from even being able to use a self-signed certificate for Stroopy.org. Needless to say, protecting our users will continue to be our main priority.
              </h5>
              <h3>Thank you for trusting Stroopy.org</h3>
            </div>
          </div>
        </div>
      </div>
      <footer class="footer footer-default">
        <div class="container">
          <div class="copyright">
            ©{{ fullyear }}
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
</template>

<script>
export default {
  data () {
    return {
      githubaccount: 'StroopyOrg',
      fullyear: new Date().getFullYear()
    }
  }
}
</script>

<style>
  .description{
    color:#6C6C6C;
  }
  
  #security_1{
    background-image: url('../assets/img/security_1.png');
  }
  
  #security_2{
    background-image: url('../assets/img/security_2.png');
  }
  
  #security_3{
    background-image: url('../assets/img/security_3.jpg');
  }
  
  .page-header-image{
    background-image: url('../assets/img/stroopy_background.png');
  }
  
  .page-header .page-header-image {
    background-position: center bottom;
  }
  
  .page-header .container>.content-center {
    position: relative;
  }
  
  .navbar-translate {
    display: -webkit-flex;
    display: -ms-flexbox;
    -webkit-justify-content: space-between !important;
    -webkit-align-items: center;
  }

  @media screen and (max-width: 768px) {
    .image-container.image-left {
        margin-bottom: 0px;
    }
  }
</style>