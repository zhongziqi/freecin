var app = new Vue({
	el: '#caculator',
	data: {
    timer:'',
    nTime1:'',
    nTime2:'',
    nTime3:'',
    succ_box:{case:0,program:0,employees:0,customer:0}
	},
	created: function() {
	},
  mounted:function(){

    // 实时监控滚动条高度
		this.get_scroller();
	},
  methods:{
    get_scroller:function(){
      var that = this;
				this.timer = setInterval(function(){
				var scrool = $(document).scrollTop();
        // console.log(scrool);
				if(scrool>1800&&scrool<3300){
					that.get_succ_box();
				}
			},1000)
    },
    get_succ_box:function(){
      var that = this;
      $.ajax({
        url:api+'/index/number',
        success:function(res){
          var result = res.data.list;
          //成功案例 //技术人员
          // clearInterval(that.timer)
          this.nTime1 = setInterval(function(){
            if(that.succ_box.case!=result.case){
              that.succ_box.case++
            }
            if(that.succ_box.program!=result.program){
              that.succ_box.program++
            }
            if(that.succ_box.employees!=result.employees){
              that.succ_box.employees++
            }
            if(that.succ_box.customer!=result.customer){
              that.succ_box.customer++
            }
          },10);
          setTimeout(function(){
              that.succ_box.employees=result.employees;
              that.succ_box.customer=result.customer;
              that.succ_box.case = result.case;
              that.succ_box.program=result.program;
             clearInterval(that.nTime1)},1500);
        }
      })
    }
  }
});
var app1 = new Vue({
	el: '#succ_case',
	data: {
		succ_box:[],
		domain:'',
		page_size:6
	},
	created: function() {
	},
  mounted:function(){
    // 获取客户成功案例

		this.get_succ_box();
	},
  methods:{
		check_more:function(){

		},
		get_succ_box:function(){
			var that = this;
			that.domain = sessionStorage.getItem('domain');
			$.ajax({
				url:api+'/index/caseList',
				method:'post',
				data:{
					type:'all',
					page_index:1,
					page_size:that.page_size
				},
				success:function(res){
					var result = res.data.list;
					that.succ_box=result;
				}
			})
		}
  }
});

var app2 = new Vue({
	el: '#main_page',
	data: {
		result:{},
		domain:''
	},
	created: function() {
	},
  mounted:function(){
    // 获取客户成功案例

		this.get_src();
	},
  methods:{
		get_src:function(){
			var that = this;
			that.domain = sessionStorage.getItem('domain');
			$.ajax({
				url:api+'/index/getTop',
				success:function(res){
					that.result = res.data.info;
				}
			})

		}
  }
});



$(".section .first_img .cover .header").mouseenter(function(){
  $('#header').css('display','block');
});

$("#header").mouseleave(function(){
  $('#header').css('display','none');
});
