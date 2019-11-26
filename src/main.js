// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import store from './store'
import axios from 'axios'
import './fliter'
import 'lib-flexible'
import elementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import mintUi from 'mint-ui'
import 'mint-ui/lib/style.css'
import './assets/css/index.css'
import './assets/css/normalize.css'

Vue.config.productionTip = false

fastclick.attach(document.body)// body内所有click 300毫秒延迟都将去掉

Vue.prototype.$http = axios

Vue.use(elementUi)

Vue.use(mintUi)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
