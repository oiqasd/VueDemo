// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//import router from './router'
import Users from './components/Users'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'//引入路由，不知上面引用就可以了，带验证
import Home from './components/Home'
import HelloWorld from './components/HelloWorld'



Vue.config.productionTip = false

Vue.use(VueRouter);

//配置路由
const routers=new VueRouter({
  routes:[
    {path:"/",component:Home},
    {path:"/helloworld",name:'helloLink',redirect='默认展示',component:HelloWorld,children:[
      {path:"/textlink",name:'textlink', component:Home},
      {path:"/helloworld/textlink2",name:'textlink2', component:Home},
    ]},
    
    
    
    {path:"*",redirect:"路径找不到跳转到这里"},
     
  ],
  mode:"history"//该属性去地址栏的#号
})

/* 全局注册组件 */
Vue.component('users', Users)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  routers,
  //router,
  components: { App },
  template: '<App/>'
})

/* index.html=>main.js=>app.vue */
