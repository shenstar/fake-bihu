import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Login from '../views/Login'
import { MAIN_TITLE } from "../config"

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            title: '首页',
        }
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: {
            title: '登录'
        }
    }
]

const router = new VueRouter({
    routes
})

router.beforeEach(function (to, from, next) {
    if (to.meta.title) {
        document.title = MAIN_TITLE + '-' + to.meta.title
    }
    next()
})

export default router
