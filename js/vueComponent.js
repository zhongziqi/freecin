

var api = 'http://freecin.dankal.cn/api';


//验证手机号码
function checkPhone(mobile) {
	if(!(/^1[34578]\d{9}$/.test(mobile))) {
		return false;
	}
}
// 去除空格
function replace_null(res){
	return res.replace(/\s+/g, "");
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
	template:`          <div class="box_center clear " >
	    	        <div class="logo fl pointer">
	    	          <img src="img/logo_.png" alt="">
	    	        </div>
	    	        <ul class="lists fl">
	    	          <li class="fl"><a href="index.html">首页</a></li>
	    	          <li class="fl solutios_head"><a href="#">解决方案</a>
	                  <div class="solutions">
	                    <ul class="clear  box_center">
	                      <li class="fl pointer">  <a href="text_solutions.html?type=sms">智能短信解决方案</a></li>
	                      <li class="fl pointer"><a href="audio_solutions.html?type=voice">智能语音解决方案</a></li>
	                      <li class="fl pointer"><a href="custom.html?type=customized">方案定制</a></li>
	                      <li class="fl pointer"><a href="price.html">价格</a></li>
	                    </ul>
	                  </div>

	                </li>
	    	          <li class="fl"><a href="tools.html">文档&工具</a></li>
	    	          <li class="fl"><a href="blog.html">博客</a></li>
	    	          <li class="fl"><a href="about.html">关于我们</a></li>

	    	        </ul>
	    	        <div class="register_login fr ">
	    	          <a  href='login.html' class="fl login pointer">登录</a>
	    	          <a href='register.html' class="fr register pointer">注册</a>
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
                    // 获取七牛根路径
										var domain = sessionStorage.getItem('domain');
										if(domain==''||domain==null){
											$.ajax({
												url:api+'/index/domain',
												success:function(res){
													sessionStorage.setItem('domain',res.data.domain);
												}
											})
										}
									}
});
Vue.component("common-header", header);
var header = new Vue({
	el: "#header"
});


// partnership
partnership = Vue.extend({
	template:`<div class="partnership">
		<div class="title">
			<div class="sub_title">
				<img src="img/left_white.png" alt="">
				<span>我们与他们一起前行</span>
				<img src="img/right_white.png" alt="">
			</div>
			<p>我们帮助他们实现价值</p>
		</div>
		<!-- 滑动开始 -->
		<div class="swiper-container box_center" style="height:119px;margin-top:94px;margin-bottom:127px;">
				<div class="swiper-wrapper">
						<div class="swiper-slide" v-for='item in swiper_box' @click='to_detail(item.id)'><img :src="item.img_src" alt=""></div>
				</div>
		</div>
		<div class="swiper-pagination outside_pagination "></div>
	</div>`,
									data:function(){
										return{
											swiper:'',
											swiper_box:[{img_src:'img/group.png'}]
										}
									},
									created:function(){
									},
									methods:{
										to_detail:function(id){
											window.location.href='detail.html?id='+id
										},
										get_swiper_box:function(){
											var that = this;
											that.swiper_box=[];
											var domain = sessionStorage.getItem('domain');
											$.ajax({
												url:api+'/index/partner',
												success:function(res){
													var result = res.data.info;
													for(var i=0;i<result.length;i++){
														that.swiper_box.push({img_src:domain+result[i].img_src})
													}
												}
											})
										}
									},
									mounted(){
											this.swiper = new Swiper('.swiper-container', {
												pagination: '.swiper-pagination',
												slidesPerView:5,
												paginationClickable: true,
												uniqueNavElements :false,
												observer:true,
												observeParents:true
											});
											this.get_swiper_box();

									}
});
Vue.component("common-partnership", partnership);
var partnership = new Vue({
	el: "#partnership"
});







// 联系我们
contact = Vue.extend({
	template:`        <div class="contact">
	          <img src="img/bg_2.png" alt="">
	          <div class="cover">
	            <div class="title">
	              <div class="sub_title">
	                <img src="img/left_white.png" alt="">
	                <span >联系我们</span>
	                <img src="img/right_white.png" alt="">
	              </div>
	              <p>请填写下面的表格或发送电子邮件至<span>info@freecin.com</span></p>
	            </div>
	            <div class="name_email clear">
	              <input class="fl" type="text" name="" v-model='name' placeholder="您的姓名*">
	              <input class="fl" type="text" name="" v-model="email" placeholder="您的Email*">
	            </div>
	            <div class="needs">
	              <input type="text" name="" v-model="needs" placeholder="您的需求*">
	            </div>
	            <div class="button" @click='send()'>发送</div>
	          </div>
	        </div>`,
									data:function(){
										return{
											name:'',
											email:'',
											needs:''
										}
									},
									created:function(){
									},
									methods:{
										send_needs:function(){
											var name = replace_null(this.name);
											var email = replace_null(this.email);
											var needs = replace_null(this.needs);
											if(name==''){
												confirm('请输入用户名！')
												return false;
											}else if(email==''){
												confirm('请输入邮箱！')
												return false;
											}else if(needs==''){
												confirm('请输入需求！');
												return false;
											}else{
												this.send_now(name,email,needs);
											}
										},
										send_now:function(name,email,needs){
											var token =getCookie('token');
											$.ajax({
												url:api+'/index/feedback',
												method:'post',
												headers:{
													token:token
												},
												data:{
													name:name,
													email:email,
													info:needs
												},
												success:function(res){
													console.log(res);
												}
											})
										},
										send:function(){
											var token = getCookie('token');
											// var token = 'f4c7e0dfe6a0d89ec2303de0b7321f3b';
											if(token==''||token==null){
												confirm('请先登录操作!');
												return false;
											}else{
												this.send_needs();
											}

										}
									},
									mounted(){
									}
});
Vue.component("common-contact", contact);
var contact = new Vue({
	el: "#contact"
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
	              <li><a href="index.html">首页</a></li>
	              <li><a href="#">解决方案</a></li>
	              <li><a href="blog.html">博客</a></li>
	              <li><a href="about.html">关于我们</a></li>
	              <li><a href="#"></a></li>
	              <li><a href="text_solutions.html?type=sms">短信解决方案</a></li>
	              <li><a href="#"></a></li>
	              <li><a href="#"></a></li>
	              <li><a href="#"></a></li>
	              <li><a href="audio_solutions.html?type=voice">语音解决方案</a></li>
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
