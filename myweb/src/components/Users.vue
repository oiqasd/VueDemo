<!--1、模板；html结构-->
import func from './vue-temp/vue-editor-bridge';
<template>
  <div id="users">
     <p>{{this.title}}</p>
     <button @click="changeTitle">子项向父组件传值</button>
  </div>
</template>

<!--2、行为：处理逻辑--> 
<script>
 
export default {
  name: 'users',
  //props:["gendatas"],
  props:{
    gendatas:{
      type:Array,
      required:true,
    }

  },//属性传值
  data(){
    return{title:'this is user.'}
  },
  methods:{
    changeTitle:function()
    {
      this.$emit("titleChange","子项向父组件传值");

    }
  },

  //Vue生命周期
  beforeCreate:function(){
    console.log("组件实例化之前");
  }
   ,created:function(){
     console.log("组件实例化完毕，页面还未展示");
     this.$http.get("http://xx")
     .then((data)=>{
       //....
     })

   },
   beforeMount:function(){
 console.log("组件挂在前，页面还未展示，但虚拟DOM已配置");
   },
    mounted:function(){
 console.log("组件挂在后，此方法执行后，页面显示");
   },  beforeUpdate:function(){
 console.log("组件更新前，页面还未更新，但虚拟DOM已配置");
   }, updated:function(){
 console.log("组件更新，此方法执行后，页面显示");
   }, beforeDestory:function(){
 console.log("组件销毁前");
   },destoryed:function(){
 console.log("组件已销毁");
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
