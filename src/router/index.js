import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import fivehundred from '@/components/fivehundred'
import tmap from '@/components/tmap'


//dome
import domeindex from '@/dome/domeindex'
import Navigation from '@/dome/Navigation'
import IdentitySelection from '@/dome/IdentitySelection'
import Audit from '@/dome/Audit'
import SettledIn from '@/dome/SettledIn'
import LowSettledIn from '@/dome/LowSettledIn'
import SettleTmap from '@/dome/SettleTmap'
import bb from '@/dome/bb'

//pages
import  areaing from '@/pages/areaing'
import  serviceing from '@/pages/serviceing'
import  usering from '@/pages/usering'
import  agenting from '@/pages/agenting'
import  Invitationing from '@/pages/Invitationing'
import  index from '@/pages/index'
import  month from '@/pages/month'
import  week from '@/pages/week'
import  agency from '@/pages/agency'

// 练习
  import father from '@/from/father'
  import child from '@/from/child'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Navigation',
      component: Navigation
    }, {
      path: '/IdentitySelection',
      name: 'IdentitySelection',
      component: IdentitySelection
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
      path: '/LowSettledIn',
      name: 'LowSettledIn',
      component: LowSettledIn
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
      path: '/month',
      name: 'month',
      component: month
    },{
      path: '/week',
      name: 'week',
      component: week
    },{
      path: '/agency',
      name: 'agency',
      component: agency
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
      path: '/father',
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
