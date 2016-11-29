$(function(){
       $(".footer_wx").hover(function(){
          $(".wx_img").show(250);
       },function(){
          $(".wx_img").hide(250);
       })
})


      var header = document.getElementById("header");
      var h_height = header.offsetHeight;
       var head = document.getElementById("news-hot");
      
      window.onscroll=function(){
        if(head){
           scrollchange();
         }
        var stop = document.body.scrollTop || document.documentElement.scrollTop;
        if(stop-h_height>-100){
           header.style.cssText+="position:fixed;opacity:0.9;z-index:999";             
        }
        else{
           header.style.cssText="height:140px;line-height:140px;font-size: 16px;background:#fff;width:100%;"
        }
      
}
function scrollchange(head){
      var head = document.getElementById("news-hot");
     var scr_top = document.body.scrollTop || document.documentElement.scrollTop;
     head.style.position="relative";
     head.style.top=scr_top/2+"px";
}

console.log("作者：旋转的刘艹艹");