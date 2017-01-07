
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
