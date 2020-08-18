import Vue from 'vue'
import App from './App.vue'

// import * as Keycloak from 'keycloak-js'
import vuetify from './plugins/vuetify';

import router from './router'
Vue.config.productionTip = false
/* let initOptions = {
  url: 'http://rc.keycloak.ledpack.cl/auth', realm: 'Demo-Realm', clientId: 'vue-test-app', onLoad:'login-required'
} */
// let keycloak = Keycloak(initOptions);

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
/*
keycloak.init({ onLoad: initOptions.onLoad }).success((auth) =>{
    
  if(!auth) {
    window.location.reload();
  } else {
    console.log('authenticated')
  }



  localStorage.setItem("vue-token", keycloak.token);
  localStorage.setItem("vue-refresh-token", keycloak.refreshToken);

  setInterval(() =>{
    keycloak.updateToken(30).success((refreshed)=>{
      if (refreshed) {
        console.log('Token refreshed '+ refreshed)
        localStorage.setItem("vue-token",keycloak.token)
        localStorage.setItem("vue-refresh-token",keycloak.refreshToken)
      } else {
        console.log('Token not refreshed, valid for '
        + Math.round(keycloak.tokenParsed.exp + keycloak.timeSkew - new Date().getTime() / 1000) + ' seconds');
      }
    }).error(()=>{
        console.log('failed to refresh token')
    });


  }, 10000
  )

})
*/