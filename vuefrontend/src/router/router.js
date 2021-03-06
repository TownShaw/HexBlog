import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: '首页',
            component: Home
        },
        {
            path: '/test',
            name: 'HelloWord Test',
            component: function() {
                return import('../components/HelloWorld.vue')
            }
        }
    ],
    mode: 'history'
})
