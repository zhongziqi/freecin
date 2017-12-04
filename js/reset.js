var app = new Vue({
	el: '#main',
	data: {
	},
    methods:{
        toSend(){
            let email = this.$refs.email_name.value;
            if(checkMail(email)){
                alert('请输入正确的邮箱地址')
            }else{
                 $.ajax({
                    type: "post",
                    url: api+'/api/user/resetPasswordEmail',
                    data: {
                        'email':username,
                    },
                    success: function (data) {
                        alert(data.data.message)
                    },
                    error:function(data){
                        alert(data.data.message)
                    }
                });
            }
        }
    },
	created: function() {
	},
    mounted:function(){
		
	}

});