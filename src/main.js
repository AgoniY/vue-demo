import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false    //构建的时候的提示信息

new Vue({
  render: h => h(App),
}).$mount('#app')
