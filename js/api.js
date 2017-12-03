var app = new Vue({
	el: '#main',
	data: {
        slide_choose:0,
        nav_choose:0
	},
	created: function() {
	},
    mounted:function(){
	
	},
    methods:{
        // 侧边的点击
        slide(val){
            this.slide_choose = val;
        },
        // api选择的点击
        nav_activity(val){
            this.nav_choose = val;
        }
    }

});
