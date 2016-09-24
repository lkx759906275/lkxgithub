var $=function(id){
		return typeof(id)=='string'?document.getElementById(id):id;
	}

var all=$('all');
var imgs=$('imgs');
var step=1440;
var index=0;
var timer=null;
var next=function(){
	index++;
	if(index>1){
		index=0;
	}
	imgs.style.left=-step*index+'px';
}
timer=setInterval(next,1000);
all.onmouseover=function(){
	clearInterval(timer);
}
all.onmouseout=function(){
	timer=setInterval(next,1000);
}
