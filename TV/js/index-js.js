 
 // 内容部分，4个小动画部分

  //自己想的本方法
  // $("#d1").hover(function(){
  // 	$("#d1").stop().addClass("active");
  // 	$("#div2,#div3,#div4").stop().hide();
  //   $("#div1").stop().show();
  // },function(){
  // 	$("#d1").stop().removeClass("active");  	
  // })

  // $("#d2").hover(function(){
  // 	$("#d1").removeClass("active");
  // 	$("#d2").stop().addClass("active");
  // 	$("#div1,#div3,#div4").stop().hide(); 	
  // 	$("#div2").stop().show();
  	
  	
  // },function(){
  // 	$("#d2").stop().removeClass("active");
  	
  // })

  //   $("#d3").hover(function(){
  //   $("#d1").removeClass("active");
  // 	$("#d3").stop().addClass("active");
  // 	$("#div1,#div2,#div4").stop().hide(); 	
  // 	$("#div3").stop().show();
  // },function(){
  // 	$("#d3").stop().removeClass("active");
  // })

  // $("#d4").hover(function(){
  // 	$("#d1").removeClass("active");
  // 	$("#d4").stop().addClass("active");
  // 	$("#div1,#div2,#div3").stop().hide(); 	
  // 	$("#div4").stop().show();
  // },function(){
  // 	$("#d4").stop().removeClass("active");
  // })


$(function(){
    window.onload = function()
    {
      var $li = $('.tab-nav li');
      var $ul = $('.con>div');
            
      $li.mouseover(function(){
        var $this = $(this);
        var $t = $this.index();
        $li.removeClass("active");
        $this.addClass('active');
        $ul.css('display','none');
        $ul.eq($t).css('display','block');
      })
    }
  });


