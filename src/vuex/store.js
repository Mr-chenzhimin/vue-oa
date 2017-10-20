// vuex/store.js
import Vue from 'vue'
import Vuex from 'vuex'
// 导入各个模块的初始状态和 mutations
//import loginjs from '@/vuex/modules/login'
import user from './modules/user'
import text from './modules/text'
import actions from '@/vuex/actions'
Vue.use(Vuex)


   export default new Vuex.Store({
       modules: {
           user,
           text
       }
   })
