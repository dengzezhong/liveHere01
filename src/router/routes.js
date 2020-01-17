// 引入组件
import Home from '../pages/view/Home/Home'
import My from '../pages/view/My/My'
import Steward from '../pages/view/Steward/Steward'
import Community from '../pages/view/Community/Community'

// 路由表
const routes = [{
  path: '/home',
  component: Home
},
{
  path: '/fair',
  component: () => import("../pages/view/Fair/Fair_index/Fair_index"),
  children: [{
    path: "search",
    component: () => import("../pages/view/Fair/components/index_search"),
    name: 'search'
  }]
},
{
  path: "/search",
  component: () => import("../pages/view/Fair/components/index_search"),
  name: 'search'
},
{
  path: '/my',
  component: My
},
{
  path: '/steward',
  component: Steward
},
{
  path: '/community',
  component: Community
},
{
  path: '*',
  redirect: '/home'
}
]

// 暴露路由表
export default routes