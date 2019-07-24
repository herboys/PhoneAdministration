import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import fivehundred from '@/components/fivehundred'
import tmap from '@/components/tmap'


//dome
import domeindex from '@/dome/domeindex'

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
      name: 'domeindex',
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
