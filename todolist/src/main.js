import Vue from 'vue'
import App from './App.vue'
// import Vuex from "vuex";
// import * as mutations from "./vuex/mutations";
// import * as actions from "./vuex/actions";
// import state from "./vuex/state"
import store from "./vuex"

Vue.config.productionTip = false

// Vue.use(Vuex)

// const store = new Vuex.Store({
//   state,
//   mutations,
//   actions
// })

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
