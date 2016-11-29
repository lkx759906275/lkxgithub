
// 产品列表页
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
	    $(".banner-top").pic_scroll();//多个地方使用
	})
//新闻页
//多文本溢出 

		$(document).ready(function() {	
			$(".p-h").dotdotdot();		
			$(".p3").dotdotdot();	
		});



