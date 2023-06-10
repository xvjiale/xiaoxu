import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './api/mock'

Vue.config.productionTip = false

// 引入element-ul
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
