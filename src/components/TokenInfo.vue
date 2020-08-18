<template>
  <v-container>
    <v-row justify="center">
      <v-btn color="primary" @click="login()">
        Login
      </v-btn>
    </v-row>
    <v-row v-if="authorizationToken" justify="center">
      <v-col cols="12" md="6">
        <v-card>
          <v-row justify="center">
            <v-card-title>
              Token Authorization
            </v-card-title>
          </v-row>
          <v-row justify="center" class="pa-3">
            <v-card-text>
              {{ authorizationToken }}
            </v-card-text>
          </v-row>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card>
          <v-row justify="center">
            <v-card-title>
              User Information
            </v-card-title>
          </v-row>
          <v-row justify="center" class="pa-3">
            <v-card-text>
              {{ decodeToken }}
            </v-card-text>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import * as jwtDecode from "jwt-decode";
import * as Keycloak from "keycloak-js";
let initOptions = {
  url: "http://rc.keycloak.ledpack.cl/auth",
  realm: "Demo-Realm",
  clientId: "vue-test-app",
  onLoad: "login-required",
};
let keycloak = Keycloak(initOptions);

export default {
  name: "App",

  components: {},

  data: () => ({
    authorizationToken: "",
    decodeToken: null,
  }),
  methods: {
    login() {
      keycloak.init({ onLoad: initOptions.onLoad }).success((auth) => {
        if (!auth) {
          window.location.reload();
        } else {
          console.log("authenticated");
        }

        localStorage.setItem("vue-token", keycloak.token);
        localStorage.setItem("vue-refresh-token", keycloak.refreshToken);
      });
    },
  },
  mounted: async function() {
    if (this.$route.hash) {
      keycloak.init({ onLoad: initOptions.onLoad }).success((auth) => {
        if (!auth) {
          window.location.reload();
        }
        //   localStorage.setItem("vue-token", keycloak.token);
        //   localStorage.setItem("vue-refresh-token", keycloak.refreshToken);
        this.authorizationToken = keycloak.token;
        this.decodeToken = jwtDecode(this.authorizationToken);
      });
    }
  },
};
</script>
