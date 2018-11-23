import Vue from 'vue'
import Router from 'vue-router'

import Movie from '../pages/movie/Movie'
import MovieDetail from '../pages/movie/MovieDetail'
import Mine from '../pages/mine/Mine'
import Cinema from '../pages/cinema/Cinema'
import CityList from '../pages/common/CityList'
import Search from '../pages/common/Search'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path:'/movie',
      component:Movie,
      alias:'/',
      children:[
        {
          path:'cityList',
          component:CityList
        },
        {
          path:'moviedetail/:id',
          component:MovieDetail,
          name:'movieDetail',
          props:true,
        }
      ]
    },
    {
      path:'/mine',
      component:Mine
    },
    {
      path:'/cinema',
      component:Cinema,
      children:[
        {
          path:'cityList',
          component:CityList
        }
      ]
    },
    {
      path: '/login',
      component: ()=> import('../pages/common/Login')
    },
    {
      path: '/search',
      component: Search
    }
  ]
})

//路由守卫  我的页面,购票页面
router.beforeEach((to,from,next)=>{
  if(to.path == '/mine' || to.path == '/buy'){
    let token = localStorage.getItem('token');
    if(token){
      next();
    }else{
      next('/login');
    }
  }else{
    next();
  }
})



export default router