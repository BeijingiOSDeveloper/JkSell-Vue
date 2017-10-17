import Vue from 'vue'
import Router from 'vue-router'
import HomeLayout from '@/components/Layout/HomeLayout'
import ContentGoods from '@/components/Home/HomeContent/Goods/ContentGoods'
import ContentRatings from '@/components/Home/HomeContent/Ratings/ContentRatings'
import ContentSellers from '@/components/Home/HomeContent/Sellers/ContentSellers'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: HomeLayout,
      children: [
        {path: '/', redirect: '/goods'},
        {path: 'goods', component: ContentGoods},
        {path: 'ratings', component: ContentRatings},
        {path: 'sellers', component: ContentSellers}
      ]
    }
  ]
})
