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
        //商城首页//
        path: '/fair',
        component: () =>
            import ("../pages/view/Fair/Fair_index/Fair_index"),
        meta: {
            footerShow: true
        },
        children: [{ //集市区块
                path: "market",
                component: () =>
                    import ("../pages/view/Fair/Fair_index/index_market"),
                name: "market",
                meta: {
                    marketMain: true, //市集区
                    communityMain: false, //社区拼团区
                    convenienceMain: false, //便利区
                    footerShow: true
                },
                components: {
                    market: () =>
                        import ("../pages/view/Fair/Fair_index/index_market"),
                }
            },
            { //便利区块
                path: "convenience",
                component: () =>
                    import ("../pages/view/Fair/Fair_index/index_convenience"),
                name: "convenience",
                meta: {
                    marketMain: false, //市集区
                    communityMain: true, //社区拼团区
                    convenienceMain: false, //便利区
                    footerShow: true
                },
                components: {
                    market: () =>
                        import ("../pages/view/Fair/Fair_index/index_convenience"),
                }
            },
            { //社区活动区块
                path: "fair_community",
                component: () =>
                    import ("../pages/view/Fair/Fair_index/index_community"),
                name: "community",
                meta: {
                    marketMain: false, //市集区
                    communityMain: false, //社区拼团区
                    convenienceMain: true, //便利区
                    footerShow: true
                },
                components: {
                    market: () =>
                        import ("../pages/view/Fair/Fair_index/index_community"),
                }
            },
        ]
    },
    {
        //商城搜索//
        path: "/fair_search",
        component: () =>
            import ("../pages/view/Fair/components/index_search"),
        name: 'search',

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
        children: [{
            name: 'welcome',
            path: '/steward/welcome',
            component: Welcome
        }],
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