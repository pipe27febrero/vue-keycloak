<template>
  <v-app>
      <v-container>
        <v-row justify="center">
          <v-col 
            cols="12"
            md="6"
            >
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
          <v-col 
          cols="12"
          md="6">
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
  </v-app>
</template>

<script>
import * as jwtDecode from 'jwt-decode'
export default {
  name: 'App',

  components: {
  },

  data: () => ({
    authorizationToken: '',
    decodeToken : {},
  }),
  methods: {
  },
  mounted: async function(){
    const getTokenPromise = function(){
          return new Promise(resolve=>{
          setTimeout(()=>{
            const token = localStorage.getItem('vue-token')
            if(token)
            {
              resolve(token)
            }
          },10)
        })
    }
    this.authorizationToken = await getTokenPromise()
    //this.authorizationToken = localStorage.getItem('vue-token')
    this.decodeToken =  jwtDecode(this.authorizationToken)
  },
};
</script>
