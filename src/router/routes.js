import login from '../views/login'
import main from '../views/main'
import mainChild from '../views/mainChild'
const routes = [
    {
        path:'/',
        component:login
    },
    {
       
        path:'/login',
        component:login,
        meta:{
            title:'登录'
        }
    },
    {
        path:'/main',
        component:main,
        meta:{
            title:'主页'
        },
        children:[
            {
                path:'mainChild',
                component:mainChild
            }
        ]
    }
]

export default routes