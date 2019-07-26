import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import fivehundred from '@/components/fivehundred'
import tmap from '@/components/tmap'


//dome
import domeindex from '@/dome/domeindex'
import Navigation from '@/dome/Navigation'
import Audit from '@/dome/Audit'
import SettledIn from '@/dome/SettledIn'
import SettleTmap from '@/dome/SettleTmap'

//pages
import  areaing from '@/pages/areaing'
import  serviceing from '@/pages/serviceing'
import  usering from '@/pages/usering'
import  agenting from '@/pages/agenting'
import  Invitationing from '@/pages/Invitationing'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path: '/fivehundred',
      name: 'fivehundred',
      component: fivehundred
    },{
      path: '/',
      name: 'Navigation',
      component: Navigation
    },{
      path: '/Audit',
      name: 'Audit',
      component: Audit
    },{
      path: '/SettledIn',
      name: 'SettledIn',
      component: SettledIn
    },{
      path: '/SettleTmap',
      name: 'SettleTmap',
      component: SettleTmap
    },{
      path: '/domeindex',
      name: 'domeindex',
      meta: {
        requireAuth: true
      },
      component: domeindex
    },{
      path: '/areaing',
      name: 'areaing',
      component: areaing
    },{
      path: '/serviceing',
      name: 'serviceing',
      component: serviceing
    },{
      path: '/usering',
      name: 'usering',
      component: usering
    }, {
      path: '/agenting',
      name: 'agenting',
      component: agenting
    }, {
      path: '/Invitationing',
      name: 'Invitationing',
      component: Invitationing
    },

    {
      path: '/tmap',
      name: 'tmap',
      component: tmap
    }
  ]
})
