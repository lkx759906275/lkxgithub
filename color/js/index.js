//banner图轮播
	 var swiper = new Swiper('.swiper-container', {
	     pagination: '.swiper-pagination',
	     nextButton: '.swiper-button-next',
	     prevButton: '.swiper-button-prev',
	     slidesPerView: 1,
	     paginationClickable: true,
	     spaceBetween: 30,
	     loop: true,
	     centeredSlides: true,
		 autoplay: 2500,
	 	 autoplayDisableOnInteraction: false,
	 	 autoHeight: true //enable auto height
	 });
// 第二个轮播图
	 $(function(){
	 //  初始第几章banner
	 var banner = 0;
	 //  banner移动的距离
	 var width = -1200;

	 //  添加点击轮换事件
	 // var tit = $(".banneron span");

	 // for(var i = 0;i < tit.length;i++) {
	 //  tit[i].index = i;
	 //  $(tit[i]).click(function(){
	 //    alert(this.index);
	 //  })
	 // }
	 $("#on1").click(function(){lunbo(0)});
	 $("#on2").click(function(){lunbo(1)});
	 $("#on3").click(function(){lunbo(2)});
	 $("#on4").click(function(){lunbo(3)});

	 // 轮换
	 function lunbo(i){
	   banner = i;
	   $("#on"+(++i)).addClass("bsh").siblings().removeClass("bsh");
	 
	   if(banner < 3){
	     $(".banner").stop().animate({'left':banner*width+'px'},1000);
	   }else{
	     $(".banner").stop().animate({'left':'0px'},2000);
	     $("#on1").addClass("bsh").siblings().removeClass("bsh");

	     banner = 0;
	   }
	   banner++;
	 };

	 //  鼠标划上停止轮换划下继续轮换
	 $(".banner").hover(function(){
	   clearInterval(a);
	 },function(){
	   a = setInterval(function(){
	     lunbo(banner);
	   },5000);
	 });

	 //  调用轮换
	 var a = setInterval(function(){
	   lunbo(banner);
	 },5000);
	});

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

// 服务项目 tab切换
	$('.service-ul li').hover(function(){
			var $t=$(this).index();		
			$('.service-right>ul').eq($t).show().siblings().hide();
			$('.service-right>ul').eq($t).show().siblings().hide();
		},function(){})


// 展示图js轮播
	jQuery.fn.extend({
	    pic_scroll:function (){
	        $(this).each(function(){
	            var _this=$(this);//存储对象
	            var ul=_this.find("ul");//获取ul对象
	            var li=ul.find("li");//获取所有图片所有的li
	            var w=li.size()*li.width();//统计图片的长度
	            li.clone().prependTo(ul);//克隆图片一份放入ul里
	            ul.width(2*w);//设置ul的长度，使所有图片排成一排
	            var i=1,l;
	            _this.hover(function(){i=0},function(){i=1});//鼠标经过时设置i=0达到鼠标经过停止效果
	            setInterval(function(){
	                //定时滚动函数
	                l = _this.scrollLeft();
	                if (l < w) {
	                    _this.scrollLeft(l+i);
	                } else {
	                    _this.scrollLeft(0);
	                }
	            },20);
	        })
	    }
	});
	$(document).ready(function(){
	    $(".a").pic_scroll();//多个地方使用
	})

