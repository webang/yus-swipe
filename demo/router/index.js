import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: () => import('../views/welcome')
    },
    {
      path: '/scale-effect',
      name: 'scale-effect',
      component: () => import('../views/scale-effect')
    }
  ]
})
