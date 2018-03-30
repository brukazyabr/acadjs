var str = "урок-3-был слишком легким";
str = str[0].toUpperCase() + str.slice(1);
str = str.replace(/-/g, " ");
console.log(str);
str = str.slice(-6, -2) + "о";
alert(str);

var arr = [20, 33, "Человек", 1, 2, 3];
var sum = 0;
for (var i = 0; i < 6; i++) {
	sum = sum + Math.pow(arr[i], 3);
} 
var sqrt = Math.sqrt(sum);
console.log(sqrt);