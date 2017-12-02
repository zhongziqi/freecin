var app = new Vue({
	el: '#header',
	data: {
	},
	created: function() {
	},
  mounted:function(){
		var swiper = new Swiper('.swiper-container', {
			pagination: '.swiper-pagination',
			slidesPerView: 5,
			paginationClickable: true,
			uniqueNavElements :false
		});
	}

});
