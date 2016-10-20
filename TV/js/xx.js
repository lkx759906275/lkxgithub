 
// 求绝对值的函数
 function abs(x){
 	if(x>=0){
 		return x;
 	}
 	else{
 		return -x;
 	}
 }

 // 求阶乘的函数    1*4*3*2

function factorial(n){
	var product=1;
	while(n>1){
		product*=n;
		n--;
	}
	return product;

}
//求阶乘的函数 方法2   1*2*3*4
function factorial2(n){
	var i,product=1;
	for(i=2,i<=n;i++){
		product*=i;
		return product;
	}
}
