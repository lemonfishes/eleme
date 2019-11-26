import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import createLogger from 'vuex/dist/logger'     // 控制台打印vuex日志的插件

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'     // 判断环境，生产还是开发

const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    strict: debug,      // strick严格模式
    plugins: debug ? [createLogger()] : []      // plugins插件，根据环境判断要不要装组件，开发环境要装，生产不装
})

export default store