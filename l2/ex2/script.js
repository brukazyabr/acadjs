
let budget = +prompt("Какой ваш бюджет на месяц в рублях?");
let nameMag = prompt("Какое имя вашего магазина?");
let time = new Date();
let hours = time.getHours();

mainList  = {
	budget,
	nameMag,
	open: false,   
	shopGoods : [],
	employers : {
		/*name,
		age,
		IsMarried: true*/
	}
}

for (let i = 0; i < 3; i++) {
	let nameThing = prompt("Какой тип товара будем продавать?");
	if((typeof(nameThing)) === "string" && (typeof(nameThing)) !== null && nameThing.length <= 50 && nameThing != "") {
		mainList.shopGoods.push(nameThing);
	} else {
			alert("Введите тип товаров правильно!");
	}
	
}

if(hours > 8 && hours < 20) {
	mainList.open = true;
	alert("Магазин открыт!");
} else {
	alert("Приходите с 8:00 до 20:00 по Московскому времени!")
}

alert("Ваш ежедневный бюджет: " + budget/30 + " рублей.");

console.log(mainList.shopGoods);