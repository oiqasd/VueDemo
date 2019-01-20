<!--1、模板；html结构-->
<template>
  <div id="app">
    <img src="./assets/logo.png">
    {{title}}
    <users></users>
    <helloWorld></helloWorld>
    <router-view/>
  </div>
</template>

<!--2、行为：处理逻辑--> 
<script>
// 局部注册组件
import HelloWorld from '@/components/HelloWorld'

export default {
  name: 'App',
  data() { 
    return { 
      title:"demo app title",
      }
  },
  components:{
    "helloWorld":HelloWorld
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
