import Vue from 'vue'
import App from './App.vue'

import textVoice from './index'

Vue.use(textVoice)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
