
	function $(id){
		return typeof id==='string'?document.getElementById(id):id;
	}
  



			
// 0------------------------------------------------------------------------0
				// ***下面执行的是自动切换效果***


			// 遍历每一个页签且给他们绑定事件
(function (){
				//表示当前高亮显示页签的索引
				var indexs=0;
				//设置一个变量用来存放定时器
				var timers=null;

				// 获取所有页签和所有要切换的内容
				var menu=$('menu').getElementsByTagName('li');
				var menudivs=$('menu-txt').getElementsByTagName('div');
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
				// 鼠标 放上去/离开 的时候 停止/开始切换

				// 遍历每一个页签且给他们绑定事件
				for(var i=0;i<menu.length;i++){
					menu[i].id=i;
					// 鼠标放去的时候触发的事件
					menu[i].onmouseover=function(){
						clearInterval(timers);
						changeOption(this.id);
					}
					// 鼠标离开事件，在让他自动播放
					menu[i].onmouseout=function(){
						timers=setInterval(autoplay,2000);
					}
				}
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//--------------------------------------------------------------------------
				
			// 先检查一遍有没有运行如果有则停止
			if(timers){
				clearInterval(timers);
				timers=null;
			}

				// 添加定时器，改变当前索引
				// 每2秒运行一段函数
			timers=setInterval(autoplay,5000);
// -------------------------------------------------------------------------
			// 代码优化  解决 重复代码

		function autoplay(){
				indexs++;
				if(indexs>=menu.length){
					indexs=0;						
				}
				changeOption(indexs); 
		}

		function changeOption(curIndexs){
					// 清楚属性和内容
					for(var j=0;j<menu.length;j++){
						menu[j].className='';
						menudivs[j].style.display="none";
					}

					//高亮显示当前页签
					menu[curIndexs].className="on";
					menudivs[curIndexs].style.display="block";
					indexs=curIndexs;
			}				
	
		
})()



