
//路由组件
import Msite from '../pages/Msite/Msite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'


export default [
    {
        path:'/msite',
        component:Msite
    },
    {
      path:'/search',
      component:Search
    },
    {
        path:'/order',
        component:Order
    },
    {
        path:'/profile',
        component:Profile
    },
  
    {
        path:'/',//项目根路径
        redirect:'msite'//重定向
    }
]
//router是对象，里面有路由，路由是数组（包含多个路由）
/* export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
}) */