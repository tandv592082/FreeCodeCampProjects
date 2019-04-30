// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import feather from 'vue-icon'
import Transitions from 'vue2-transitions'

import vueSmoothScroll from 'vue2-smooth-scroll'
import VueResource from 'vue-resource'
import AOS from 'aos'
import 'aos/dist/aos.css'


Vue.use(VueResource);
Vue.use(vueSmoothScroll)

Vue.use(Transitions)
Vue.use(feather, 'v-icon')
Vue.config.productionTip = false
Vue.http.options.emulateJSON = true;
Vue.http.options.emulateHTTP = true;
Vue.http.options.root = '/root';
Vue.http.headers.common['Authorization'] = '*';
Vue.http.headers.common['Access-Control-Allow-Origin'] = '*'
Vue.http.options.xhr = {withCredentials: true};
/* eslint-disable no-new */
new Vue({
  created() {
    AOS.init();
  },
  el: '#app',
  components: { App },
  template: '<App/>'
})
