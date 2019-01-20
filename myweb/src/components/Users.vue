<!--1、模板；html结构-->
<template>
  <div id="users">
     <p>{{this.title}}</p>
  </div>
</template>

<!--2、行为：处理逻辑--> 
<script>
 
export default {
  name: 'users',
  data(){
    return{title:'this is user.'}
  },
   
}
</script>

<!--3、样式,scoped当前作用域-->
<style scoped>
#users {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color:crimson;
  margin-top: 60px;
}
</style>
