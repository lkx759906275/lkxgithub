
// 导航部分
// 下拉菜单
$(".item3").hover(function(){
   // $(".item3 #li-down").show(200);
   $(".item3 #li-down").stop().fadeIn(240);                       
},function(){
   // $(".item3 #li-down").hide(200);
   $(".item3 #li-down").stop().fadeOut(240);
})

$(".item4").hover(function(){
	$(".item4 #li-down").stop().fadeIn(240);
},function(){
	$(".item4 #li-down").stop().fadeOut(240);
})

$(".item6").hover(function(){
	$(".item6 #li-down").stop().fadeIn(240);
},function(){
	$(".item6 #li-down").stop().fadeOut(240);
})

// 轮播图
	
		var swiper = new Swiper('.swiper-container', {
		    pagination: '.swiper-pagination',
		    nextButton: '.swiper-button-next',
		    prevButton: '.swiper-button-prev',
		    slidesPerView: 1,
		    paginationClickable: true,
		    spaceBetween: 30,
		    loop: true
		});

  
