

var api = 'http://big.dankal.cn/api';


//验证手机号码
function checkPhone(mobile) {
	if(!(/^1[34578]\d{9}$/.test(mobile))) {
		return false;
	}
}

// 验证邮箱
function checkMail(mail){
	if(!(/[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/.test(mail))){
		return false;
	}
}


//获取链接中的参数
function getUrlParam(name) {
	// 获取当前地址链接
    var url = window.location.search;
    //  正则筛选地址链接中的参数
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    // 匹配目标参数
    var result = url.substr(1).match(reg);
    //返回参数值
    return result ? decodeURIComponent(result[2]) : null;
}

//转换时间格式yyyy-MM-dd h:m:s
function getTime(timestamp,type){
//	var timestamp = 1403058804;
    var newDate = new Date();
    newDate.setTime(timestamp * 1000);
    Date.prototype.format = function(format) {
		var date = {
			"M+": this.getMonth() + 1,
			"d+": this.getDate(),
			"h+": this.getHours(),
			"m+": this.getMinutes(),
			"s+": this.getSeconds(),
			"q+": Math.floor((this.getMonth() + 3) / 3),
			"S+": this.getMilliseconds()
		};
		if(/(y+)/i.test(format)) {
			format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
		}
		for(var k in date) {
			if(new RegExp("(" + k + ")").test(format)) {
				format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? date[k] : ("00" + date[k]).substr(("" + date[k]).length));
			}
		}
		return format;
	}
    if(type=="detail"){
      	return newDate.format('yyyy-MM-dd hh:mm:ss')
    }else{
    	    return newDate.format('yyyy-MM-dd')
    }
}

//设置cookie
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

//获取cookie
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
    }
    return "";
}

//清除cookie
function clearCookie(name) {
    setCookie(name, "", -1);
}


//头部组件
header = Vue.extend({
	template:`      <div class="box_center clear " >
	        <div class="logo fl pointer">
	          <img src="img/logo_.png" alt="">
	        </div>
	        <ul class="lists fl">
	          <li class="fl"><a href="#">首页</a></li>
	          <li class="fl"><a href="#">解决方案</a></li>
	          <li class="fl"><a href="#">文档&工具</a></li>
	          <li class="fl"><a href="#">博客</a></li>
	          <li class="fl"><a href="#">关于我们</a></li>

	        </ul>
	        <div class="register_login fr ">
	          <button class="fl login pointer">登录</button>
	          <button class="fr register pointer">注册</button>
	        </div>
	      </div>`,
									data:function(){
										return{
										}
									},
									created:function(){
									},
									methods:{
									},
									mounted(){
									}
});
Vue.component("common-header", header);
var header = new Vue({
	el: "#header"
});



//尾部组件
footer = Vue.extend({
	template:`
	<div>	  <div class="footer_top">
	        <div class="box_center clear">
	          <div class="fl left">
	            <img src="img/logo_.png" alt="">
	            <p>亚洲领先云信息通信平台</p>
	          </div>
	          <div class="fl middle">
	            <ul class="clear">
	              <li><a href="#">首页</a></li>
	              <li><a href="#">解决方案</a></li>
	              <li><a href="#">博客</a></li>
	              <li><a href="#">关于我们</a></li>
	              <li><a href="#"></a></li>
	              <li><a href="#">短信解决方案</a></li>
	              <li><a href="#"></a></li>
	              <li><a href="#"></a></li>
	              <li><a href="#"></a></li>
	              <li><a href="#">语音解决方案</a></li>
	            </ul>
	            <p class="hot_line">企业热线 ：400-071-168 企业邮箱：info@freecin.com</p>
	            <p>企业地址 ：XXXXXXXXXXXXXXXXXXXXXXXXXXX</p>
	          </div>
	          <div class="fr right">
	            <img src="img/pic_qr.png" alt="">
	            <p>关注公众号</p>
	          </div>
	        </div>
	      </div>
	      <div class="footer_bottom">
	Copyright©2017 FreencinXXXXXX有限公司版权所有 XX网安备 43019002000310号
	      </div></div>`,
});
Vue.component("common-footer", footer);
var footer = new Vue({
	el: "#footer"
});