var app = new Vue({
	el: '#text_solutions',
	data: {
    selected:'中国',
		domain:'',
		swiper_box:[{img_src:'img/group.png'}]
	},
	created: function() {
	},
  mounted:function(){
		var swiper = new Swiper('.swiper-container', {
			pagination: '.swiper-pagination',
			slidesPerView: 3,
			paginationClickable: true,
      spaceBetween : 45,
			uniqueNavElements :false,
			observer:true,
			observeParents:true
		});
		var type = getUrlParam('type');
		this.get_swiper_box(type);
	},
	methods:{
		to_detail:function(id){
			window.location.href='detail.html?id='+id
		},
		get_swiper_box:function(type){
			var that = this;
			that.domain = sessionStorage.getItem('domain');
			that.swiper_box=[];
			$.ajax({
				url:api+'/index/caseList',
				method:'post',
				data:{
					type:type,
					page_index:1,
					page_size:1000,
				},
				success:function(res){
					that.swiper_box=res.data.list;
				}
			})
		}
	}

});
