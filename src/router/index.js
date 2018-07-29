import Vue from 'vue'
import Router from 'vue-router'
import Rhymesaurus from '@/components/Rhymesaurus'
import AdjectiveFinder from '@/components/AdjectiveFinder'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Rhymesaurus',
      component: Rhymesaurus
    },
    {
      path: '/adjective-finder',
      name: 'AdjectiveFinder',
      component: AdjectiveFinder
    }
    
  ]
})
