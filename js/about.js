var app = new Vue({
	el: '#main',
	data: {
	},
	created: function() {
	},
  mounted:function(){
		var swiper = new Swiper('.swiper-container', {
			pagination: '.swiper-pagination',
			slidesPerView: 1,
            effect : 'slide',
            loop:true,
            autoplay:3500,
            autoplayDisableOnInteraction:false,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
		});
	}

});
