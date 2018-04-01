var sum = 0;
var arr = [];
var count = +prompt("Введите количество массививов:");
for (let i = 0; i < count; i++) {	
	var array = [];
	arr.push(array);
	for (let i = 0; i < 5; i++) {
		var a = Math.round(Math.random()*100 + 1);
		array.push(a);
		sum = sum + a;
	}
}
console.log(sum);