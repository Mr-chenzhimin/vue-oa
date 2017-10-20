// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/router'
import store from '@/vuex/store'
import axios from 'axios'
import { AlertPlugin, ToastPlugin } from 'vux'
import 'vux/src/styles/reset.less'

Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.use(AlertPlugin)
Vue.use(ToastPlugin)
Vue.prototype.$http = axios.create({
  timeout: 10000,
  headers: {'Content-Type': 'application/json'}
})
// axios.defaults.baseURL = 'http://oa.sznoda.com:7890/oa';


/* eslint-disable no-new */
new Vue({
  el: '#app',
  data:{},
  router,
  store,
  created() {
    this.checkLogin();
  },
  methods:{
    checkLogin(){

      //检查是否存在session
      // if(!this.getCookie('session')){
        this.$router.push('/login');
      // }else{
      //   this.$router.push('/Hello');
      // }
    }
  },
  template: '<App/>',
  components: { App }
})
