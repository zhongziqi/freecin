var app = new Vue({
	el: '#main',
	data: {
	},
    methods:{
        toSend(){
            let name_one = this.$refs.username_one.value;
            let name_two = this.$refs.username_two.value;
            let company_name = this.$refs.company_name.value;
            let email_name = this.$refs.email_name.value;
            let pwd = this.$refs.pwd.value;
            let pwd_confirm = this.$refs.pwd_confirm.value;
            if(name_one == ''||name_two == ''){
                alert('请输入您完整的姓氏名字')
            }else{
                if(company_name == ''){
                    alert('请输入您公司的名字')
                }else{
                    if(email_name == ''){
                        alert('请输入您的邮箱地址')
                    }else{
                        if(checkMail(email_name)){
                            console.log(email_name)
                            alert('请输入您正确的邮箱地址')
                        }else{
                            if(pwd == ''){
                               alert('请输入您的密码') 
                            }else{
                                if(pwd != pwd_confirm){
                                    alert('您输入的两次密码不一致')
                                }else{
                                     $.ajax({
                                        method: "post",
                                        url: api+'/user/register',
                                        data: {
                                            'first_name':name_one,
                                            'last_name':name_two,
                                            'email':email_name,
                                            'company_name':company_name,
                                            'password':pwd,
                                            'confirm_password':pwd_confirm
                                        },
                                        success: function (data) {
                                            alert(data.message)
                                        },
                                        error:function(data){
                                            alert(data.message)
                                        }
                                    });
                                }
                            }
                        }
                    }
                }
            }
        }
    },
	created: function() {
	},
    mounted:function(){
		
	}

});