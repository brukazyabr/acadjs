
var budget = +prompt("Какой ваш бюджет на месяц в рублях?");
var nameMag = prompt("Какое имя вашего машазина?");

mainList  = {
	budget,
	nameMag,
	open: true,
	shopGoods : [],
	employers : {
		/*name,
		age,
		IsMarried: true*/
	}
}

alert("Ваш ежедневный бюджет: " + budget/30 + " рублей.");
for (var i = 0; i < 3; i++) {
	var nameThing = prompt("Какой тип товара будем продавать?");
	mainList.shopGoods.push(nameThing);
}
console.log(mainList.shopGoods);