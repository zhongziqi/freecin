var app = new Vue({
	el: '#price',
	data: {
    text:true,
    voice:false,
    custom:false,
    text0:true,
    voice1:false,
    custom2:false,
    country:'中国'
	},
	created: function() {
	},
  mounted:function(){
	},
  watch:{
  
  },
	methods:{
    price_type:function(type){
      console.log(type);
      if(type=='text'){
        this.text=true;
        this.voice=false;
        this.custom=false;
      }else if(type=='voice'){
        this.text=false;
        this.voice=true;
        this.custom=false;
      }else if(type=='custom'){
        this.text=false;
        this.voice=false;
        this.custom=true;
      }
    }
	}

});
