var app = new Vue({
	el: '#main',
	data: {
	},
    methods:{
        toLogin(){
            let username = this.$refs.username.value;
            let pwd = this.$refs.pwd .value;
            
            if(username==''){
                alert('请输入您的账号')
            }else{
                if(pwd==''){
                    alert('请输入您的密码')
                }else{
                     $.ajax({
                        type: "post",
                        url: api+'/api/user/login',
                        data: {
                            'email':username,
                            'password':pwd,
                        },
                        success: function (data) {
                            setCookie('token',data.data.token);
                            setCookie('userInfo',data.data.user_info);
                            alert(data.message)
                        },
                        error:function(data){
                            alert(data.message)
                        }
                    });
                }
            }
        }
    },
	created: function() {
	},
    mounted:function(){
		
	}

});