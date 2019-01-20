<!--1、模板；html结构-->
<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- {{title}}
    <users v-on:titleChange="updateTitle($event)" v-bind:gendatas="gendata"></users>
    <helloWorld></helloWorld> -->

    <ul>
      <li><router-link to='/'>Home</router-link></li>
      <li><router-link to='/helloworld'>Home</router-link></li>
      <li><router-link :to='变量'>Home</router-link></li>
    </ul>
    <router-view/>
  </div>
</template>

<!--2、行为：处理逻辑--> 
<script>
// 局部注册组件
// import HelloWorld from '@/components/HelloWorld'

export default {
  name: 'App',
  data() { 
     return { 
       变量:"变量地址"
    //   title:"demo app title",
    //   gendata:[{type:"txt1",value:"aa1",show:false},
    //             {type:"txt2",value:"aa2",show:false},
    //             {type:"txt3",value:"aa3",show:false},
    //             {type:"txt4",value:"aa4",show:false},]//组件传值
       }
  },
  components:{
    // "helloWorld":HelloWorld
  },
  methods:{
    // updateTitle(title)
    // {
    //   this.title=title;
    // }
  }
}
</script>

<!--3、样式-->
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
