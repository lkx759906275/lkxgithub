
	function $(id){
		return typeof id==='string'?document.getElementById(id):id;
	}
  

	

			
// 0------------------------------------------------------------------------0
				// ***下面执行的是自动切换效果***


			// 遍历每一个页签且给他们绑定事件
(function(){
				//表示当前高亮显示页签的索引
				var index=0;
				//设置一个变量用来存放定时器
				var timer=null;

				// 获取所有页签和所有要切换的内容
				var title=$('ciltop').getElementsByTagName('li');
				var divs=$('content').getElementsByTagName('div');
				
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
				// 鼠标 放上去/离开 的时候 停止/开始切换

				// 遍历每一个页签且给他们绑定事件
				for(var i=0;i<title.length;i++){
					title[i].id=i;
					// 鼠标放去的时候触发的事件
					title[i].onmouseover=function(){
						clearInterval(timer);
						changeOption(this.id);
					}
					// 鼠标离开事件，在让他自动播放
					title[i].onmouseout=function(){
						timer=setInterval(autoplay,2000);
					}
				}
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//--------------------------------------------------------------------------
				
			// 先检查一遍有没有运行如果有则停止
			if(timer){
				clearInterval(timer);
				timer=null;
			}

				// 添加定时器，改变当前索引
				// 每2秒运行一段函数
			timer=setInterval(autoplay,12000);
// -------------------------------------------------------------------------
			// 代码优化  解决 重复代码

		function autoplay(){
				index++;
				if(index>=title.length){
					index=0;						
				}
				changeOption(index); 
		}

		function changeOption(curIndex){
					// 清楚属性和内容
					for(var j=0;j<title.length;j++){
						title[j].className='';
						divs[j].style.display="none";
					}

					//高亮显示当前页签
					title[curIndex].className="select";
					divs[curIndex].style.display="block";
					index=curIndex;

			}				
	
		
})()



