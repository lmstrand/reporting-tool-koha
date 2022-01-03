import Vue from 'vue'
import App from './App.vue'



import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'//import css files


//import './custom.scss'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'// Install BootstrapVue

import Vuex from 'vuex'

//add this line to your main.js file
import store from './store'

Vue.use(Vuex)

Vue.use(BootstrapVue)// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)


Vue.config.productionTip = false

new Vue({
  //add this line to your main.js file
store,
  render: h => h(App),
}).$mount('#app')


