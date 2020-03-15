import Vue from 'vue'
import App from './App.vue'
import router from './router'

import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import 'typeface-roboto'
import 'material-design-icons/iconfont/material-icons.css'
Vue.use(MuseUI)

import VueCodemirror from 'vue-codemirror'
import 'codemirror/lib/codemirror.css'
Vue.use(VueCodemirror)
//引入点击波纹效果
import Helpers from 'muse-ui/lib/Helpers';
Vue.use(Helpers);

Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
