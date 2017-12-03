var app = new Vue({
	el: '#main',
	data: {
	},
	created: function() {
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

		var swiper_two = new Swiper('.swiper-container_two', {
			pagination: '.swiper-pagination',
			slidesPerView: 5,
			paginationClickable: true,
			uniqueNavElements :false
		});
		// console.log(swiper_two,'yessese')
	}

});
