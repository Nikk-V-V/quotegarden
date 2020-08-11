import Vue from 'vue'
import VueRouter from 'vue-router'


  Vue.use(VueRouter)

  const routes = [
    {
      path: '',
      name: 'random',
      component: () => import('../views/RandomQuote')
    },
    {
      path: '/author/:author',
      name: 'authorQ',
      component: () => import('../views/AllQuoteByAuthor')
    },
    {
      path: '/genre/:genre',
      name: 'genre',
      component: () => import('../views/Genre')
    }
  ]

  const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })

export default router
