var app = new Vue({
	el: '#main',
	data: {
		the_history:[],
		the_banner:[],
		domain:''
	},
	created: function() {	
		//图片
		this.domain = sessionStorage.getItem('domain');
		let that = this;

		//top轮播
		$.ajax({
			method: "post",
			url: api+'/banner/index',
			success: function (data) {
				if(data.code=='200'){
					that.the_banner = data.data.list;
				}
			},
			error:function(data){
				alert(data.message)
			}
		});

		//公司历程	
		$.ajax({
			method: "post",
			url: api+'/index/history',
			success: function (data) {
				if(data.code=='200'){
					that.the_history = data.data.info;
				}
			},
			error:function(data){
				alert(data.message)
			}
		});

		//

	},
  mounted:function(){
		var swiper = new Swiper('.swiper-container_one', {
						slidesPerView: 1,
            effect : 'slide',
            loop:true,
            autoplay:3500,
            autoplayDisableOnInteraction:false,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev'
		});

		// var swiper_two = new Swiper('.swiper-container_two', {
		// 	pagination: '.swiper-pagination',
		// 	slidesPerView: 5,
		// 	paginationClickable: true,
		// 	uniqueNavElements :false
		// });
		// console.log(swiper_two,'yessese')
	}

});



var apps = new Vue({
	el: '#partnerships',
	data: {
		swiper_box:[{img_src:'img/group.png'}],
		swiper_two:''
	},
	created: function() {
	},
  mounted:function(){
		this.swiper_two = new Swiper('.swiper-container_two', {
			pagination: '.swiper-pagination',
			slidesPerView: 5,
			paginationClickable: true,
			uniqueNavElements :false,
			observer:true,
			observeParents:true
		});
		this.get_swiper_box();
	},
	methods:{
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
	}

});
