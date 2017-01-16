
    function aa(){
     var width=this.screen.width;   
     if(width<768){
        var num=$(".new-pro-ul li");   
        for(var i=0;i<num.length;i++){
          if(i>=2){
            num[i].style.display="none";
          }
          else{
            num[i].style.display="block";
          }
        }
      }      
    }
    aa();

  

    // 这个是为了 让产品在手机屏幕下只显示4个
    $(function(){
      var nums = $("#content .contxt").eq(0).find(".pr-li li");
      phone(nums);
    })

    $(".tab-ul li ").click(function(){
        var index = $(this).index();
        var nums= $("#content .contxt").eq(index).find(".pr-li li");
        phone(nums);
    })


  function phone(nums){
     var width=window.screen.width; 
        if(width<768){
          for(var i=0;i<nums.length;i++){
            if(i>=4){
              nums[i].style.display="none";
            }
            else{
              nums[i].style.display="block";
            }
          }
        }
  }

   