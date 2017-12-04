var app = new Vue({
	el: '#main',
	data: {
       detail:''
	},
	created: function() {
        let id = getUrlParam('id');
        let blog = getUrlParam('type')
        let that = this;
        this.domain = sessionStorage.getItem('domain');
        if(blog){
          // 获取博客列表
          $.ajax({
                method: "post",
                url: api+'/index/bloggerInfo',
                data: {
                    'id':id
                },
                success: function (data) {
                    if(data.code=='200'){
                        that.detail = data.data.info;
                            that.detail.time = getTime(that.detail.create_time)
                    }
                },
                error:function(data){
                    alert(data.message)
                }
            });
        }else{
             // 获取博客列表
            $.ajax({
                    method: "post",
                    url: api+'/index/caseInfo',
                    data: {
                        'id':id
                    },
                    success: function (data) {
                        if(data.code=='200'){
                            that.detail = data.data.info;
                                that.detail.time = getTime(that.detail.create_time)
                        }
                    },
                    error:function(data){
                        alert(data.message)
                    }
                });
        }
       

	},
    mounted:function(){
	},
    methods:{
      
    }

});

