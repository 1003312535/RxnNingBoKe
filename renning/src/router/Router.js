import Router from 'vue-router'
import Vue from 'vue'

Vue.use(Router)

const Home = () => import('../views/home/Home')
const Profile = () => import('../views/profile/Profile')
const Register = () => import('../views/register/Register')
const Logon = () => import('../views/logon/Logon')
const Edit = () => import('../views/edit/Edit')
const Comment = () => import('../views/comment/Comment')
const Category = () => import('../views/category/Category')
const Tag = () => import('../views/tag/Tag')
const InterFile = () => import('../views/interfile/InterFile')
const routes =[
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/category/:currentindex',
    component: Category
  },
  {
    path: '/tag/:currentindex',
    component: Tag
  },
  {
    path: '/interfile',
    component: InterFile
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/edit',
    component: Edit
  },
  {
    path: '/comment/:title',
    component: Comment
  },{
    path: '/logon',
    component: Logon
  },
  {
    path: '/register',
    component: Register
  }

]
const router = new Router({
  routes,
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    return {
      x: 0,
      y: 0
    }
  }
})
export default router