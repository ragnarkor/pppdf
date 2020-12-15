import Vue from 'vue'
import App from './App.vue'
import router from './router'	// 引入router
import store from './store'

import Vant from 'vant'	// 先导入所有组件，最后打包优化再按需引入
import 'vant/lib/index.css'
Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
