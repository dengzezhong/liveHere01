import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import './assets/js/rem'
import Vant from 'vant'
import 'vant/lib/index.css'
import './assets/css/assets_use.styl'
import './assets/font/iconfont.css'
Vue.use(Vant)


new Vue({
    router,
    render: h => h(App),
}).$mount('#app')