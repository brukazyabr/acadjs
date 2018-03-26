var num = "33721";
var num1 = 1;
for (var i = 0; i<5; i++){
	num1 = num1 * (+num[i])
}

num = Math.pow(num1, 3);
alert(num);