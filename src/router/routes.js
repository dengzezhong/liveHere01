// 引入组件
import Home from '../pages/view/Home/Home'
import My from '../pages/view/My/My'
import Steward from '../pages/view/Steward/Steward'
import Community from '../pages/view/Community/Community'
import Welcome from '../pages/view/Steward/Steward_welcome'
import Invite from '../pages/view/Home/Services/Invite.vue'
import toInvite from '../pages/view/Home/Services/toInvite.vue'
import UserServe from '../pages/view/Home/UserServer/UserServe'
import Open from '../pages/view/Home/UserServer/Open'

// 路由表
const routes = [{
        path: '/home',
        component: Home,
        meta: {
            footerShow: true
        }
    },

    {
        path: '/my',
        component: My,
        meta: {
            footerShow: true
        }
    },
    {
        path: '/steward',
        component: Steward,
        // children: [{
        //     name: 'welcome',
        //     path: '/steward/welcome',
        //     component: Welcome
        // }]
        meta: {
            footerShow: true
        }
    },
    {
        name: 'welcome',
        path: '/steward/welcome',
        component: Welcome
    },
    {
        path: '/community',
        component: Community,
        meta: {
            footerShow: true
        }
    },
    {
        path: '*',
        redirect: '/home',
        meta: {
            footerShow: true
        }
    },
    {
        path: '/invite',
        component: Invite
    },
    {
        path: '/toInvite',
        component: toInvite
    },
    // 首页内，便民服务内路由
    {
        path: '/userserve',
        component: UserServe
    },
    {
        path: '/open',
        component: Open
    }
]

// 暴露路由表
export default routes