function $(id){
	return document.getElementById(id);
}
 var tits=$("tit").getElementsByTagName("li");
 var tab=$("con").getElementById("tab");
 var tab2=$("con").getElementById("tab2");
for(i=0,i<tits.length;i++){
		tits[i].value=i;
		tits[i].onmouseover=function(){
			for(j=0;j<tits.length;j++){
				tits[j].className="";
				divs[j].style.display="none";
			}
			this.className="titlits";
			divs[this.value].style.display="block";
		}
} 