Vue.component("xb-component",{
    template:'<p>{{name}}：这是一个组件<button @click="changeName">改名</button></p>',
    data:function(){
       return{
        name:"张三"
       }
    },methods:{
        changeName:function(){
            this.name="李四";
        }
    }
})

new Vue({
    el:"#app-component"
})