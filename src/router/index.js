import Vue from 'vue'
import Router from 'vue-router'
import Navbar from '@/components/Navbar'
import vueResource from 'vue-resource'

Vue.use(Router)
Vue.use(vueResource)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Navbar',
      component: Navbar
    }
  ]
})
