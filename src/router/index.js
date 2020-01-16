import Vue from 'vue'

import vueRouter from 'vue-router'

import routes from './routes'


// 通过use注册,才可以使用第三方包
Vue.use(vueRouter)

const router = new vueRouter({
    routes,
    mode: 'history'
})

export default router