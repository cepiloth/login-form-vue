import Vue from 'vue'
import App from './App.vue'

new Vue({
  el: '#app',
  vuetify : new Vue(),		// <-- 추가
  render: h => h(App)
})
