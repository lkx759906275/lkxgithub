

// tab
	$('.tab-title ul li').hover(function(){
			var $t=$(this).index();		
			$('.tab-txt>div').eq($t).show().siblings().hide();
		},function(){})


//tab2
	$('.tab2-title ul li').hover(function(){
			var $t=$(this).index();		
			$('.tab2-txt>div').eq($t).show().siblings().hide();
			$('.servive-bg li').eq($t).show().siblings().hide();
		},function(){})

// 新闻内容
	
	$('.newmore-title ul li').hover(function(){
			var $t=$(this).index();		
			$('.newmore-smimg>ul').eq($t).show().siblings().hide();
			$('.newmore-contxt>ul').eq($t).show().siblings().hide();
		},function(){})