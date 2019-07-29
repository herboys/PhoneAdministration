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
import bb from '@/dome/bb'

//pages
import  areaing from '@/pages/areaing'
import  serviceing from '@/pages/serviceing'
import  usering from '@/pages/usering'
import  agenting from '@/pages/agenting'
import  Invitationing from '@/pages/Invitationing'
import  index from '@/pages/index'

// 练习
  import father from '@/from/father'
  import child from '@/from/child'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Navigation',
      name: 'Navigation',
      component: Navigation
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path: '/fivehundred',
      name: 'fivehundred',
      component: fivehundred
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
    } ,{
      path: '/index',
      name: 'index',
      component: index
    }
    ,{
      path: '/',
      name: 'father',
      component: father
    } ,{
      path: '/child',
      name: 'child',
      component: child
    },{
      path: '/bb',
      name: 'bb',
      component: bb
    }
  ]
})
