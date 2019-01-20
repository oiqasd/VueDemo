// 实例化vue对象
new Vue({
    el:"#vue-app",//element对应html中的容器元素
    data:{
        name:"LiLi",
        age:30,
        X:0,
        Y:0,
        website:"http://www.baidu.com",
        websiteTag:"<a href='http://www.baidu.com'>跳转</a>",
        isshow:false,
        characters:["Mario","Luffy","Yoshi"],
        users:[{name:"AA",age:10},
               {name:"BB",age:20},
               {name:"CC",age:30},
            ]
    },//用于数据存储
    methods:{
        greet:function(val)
        {
            return 'hello' + val + this.name;
        },
        substract:function(){
            this.age--;
        },
        updateXY:function(event){
            //console.log(event);
            this.X=event.offsetX;
            this.Y=event.offsetY;
        },
        stopMoving:function(event){
            event.stopPropagation();
        },
        btnShow:function()
        {
            this.isshow=!this.isshow;
        }
    },//方法
    computed:{
        sellist:function(){

        }
    }//计算属性,dom没发生变化则不操作，methods会总是操作，适用耗时的场景：搜索等;调用时不用加()

});
