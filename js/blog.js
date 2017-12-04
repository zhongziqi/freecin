var app = new Vue({
	el: '#main',
	data: {
        page_index:1,
        blogList:[],
        domain:'',
	},
	created: function() {
        let that = this;
        this.domain = sessionStorage.getItem('domain');
        // 获取博客列表
          $.ajax({
                method: "post",
                url: api+'/index/bloggerList',
                data: {
                    'page_index':this.page_index,
                    'page_size':6,
                    
                },
                success: function (data) {
                    if(data.code=='200'){
                        that.blogList = data.data.list;
                        for(let i=0;i<that.blogList.length;i++){
                            that.blogList[i].time = getTime(that.blogList[i].create_time)
                        }
                    }
                },
                error:function(data){
                    alert(data.message)
                }
            });

	},
    mounted:function(){
	},
    methods:{
       getMore(){
           this.page_index += 1;
            // 获取博客列表
            $.ajax({
                    method: "post",
                    url: api+'/index/bloggerList',
                    data: {
                        'page_index':this.page_index,
                        'page_size':6,
                        
                    },
                    success: function (data) {
                        if(data.code=='200'){
                            console.log(data,'1111')
                            if(data.data.list&&data.data.list.length!=0){
                                for(let j=0;j<that.blogList.length;j++){
                                    that.blogList.push(data.data.list[j])
                                }
                            }else{
                                alert('没有更多')
                            }
                        }
                    },
                    error:function(data){
                        alert(data.message)
                    }
                });

       },
       toDetail(the_id){
            window.location.href='detail.html?id='+the_id+'&type=blog';
       }
    }

});

