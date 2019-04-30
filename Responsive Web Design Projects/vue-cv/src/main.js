// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import feather from 'vue-icon'
import Transitions from 'vue2-transitions'
import animate from 'animate.css'
import vueSmoothScroll from 'vue2-smooth-scroll'
import VueResource from 'vue-resource'

Vue.use(VueResource);
Vue.use(vueSmoothScroll)
Vue.use(animate)
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
  el: '#app',
  components: { App },
  template: '<App/>'
})
