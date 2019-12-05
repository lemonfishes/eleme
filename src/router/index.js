import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: () => import('@/components/home/home'),
      children: [
        {
          path: '/',
          redirect: 'take'
        },
        {
          path: 'take',
          name: 'Take',
          component: () => import('@/components/home/take/take'),
          meta: {
            title: '外卖'
          }
        },
        {
          path: 'find',
          name: 'Find',
          component: () => import('@/components/home/find/find'),
          meta: {
            title: '发现'
          }
        },
        {
          path: 'order',
          name: 'Order',
          component: () => import('@/components/home/order/order'),
          meta: {
            title: '订单'
          }
        },
        {
          path: 'mine',
          name: 'Mine',
          component: () => import('@/components/home/mine/mine'),
          meta: {
            title: '我的'
          }
        }
      ]
    },
    {
      path: '/seller',
      name: 'Seller',
      component: () => import('@/components/seller/Seller.vue'),
      children: [
        {
          path: 'goodsList',
          component: () => import('@/components/seller/goodsList/GoodsList.vue')
        }
      ]
    },
    {
      path: '/address',
      name: 'addressManage',
      component: () => import('@/components/address/addressManage.vue'),
      children: [
        {
          path: '/',
          redirect: 'list'
        },
        {
          path: 'add/:name',
          name: 'AddAddress',
          component: () => import('@/components/address/add.vue')
        },
        {
          path: 'list',
          name: 'AddressList',
          component: () => import('@/components/address/addressList.vue')
        }
      ]
    },
    {
      path: '/redPackage',
      name: 'RedPackage',
      component: () => import('@/components/redpackage/list.vue')
    },
    {
      path: '/collect',
      name: 'CollectList',
      component: () => import('@/components/collect/list.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default router
