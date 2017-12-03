var app = new Vue({
	el: '#text_solutions',
	data: {
    selected:'中国'
	},
	created: function() {
	},
  mounted:function(){
		var swiper = new Swiper('.swiper-container', {
			pagination: '.swiper-pagination',
			slidesPerView: 3,
			paginationClickable: true,
      spaceBetween : 45,
			uniqueNavElements :false
		});
	}

});
