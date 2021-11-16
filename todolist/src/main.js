import Vue from 'vue'
import App from './App.vue'
import store from "./vuex"
import i18n from "./i18n/i18n"
import FlagIcon from 'vue-flag-icon';
import VeeValidate from 'vee-validate';

Vue.use(VeeValidate);

Vue.use(FlagIcon);
Vue.config.productionTip = false

new Vue({
  i18n,
  store,
  render: h => h(App)
  
}).$mount('#app')
