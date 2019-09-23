import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: () => import('../views/welcome')
    },
    {
      path: '/space-between',
      name: 'space-between',
      component: () => import('../views/space-between')
    }
  ]
})
