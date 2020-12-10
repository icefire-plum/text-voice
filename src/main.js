import Vue from 'vue'
import App from './App.vue'

import speech from './index'

Vue.use(speech)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
