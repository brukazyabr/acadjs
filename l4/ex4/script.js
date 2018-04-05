
let money, nameMag, time, hours, price, partPrice, employerName;

function start() {
	money = +prompt("Какой ваш бюджет на месяц в рублях?", "");
	while(isNaN(money) || money == null || money == "") {
		money = +prompt("Какой ваш бюджет на месяц в рублях?", "");
	}
	nameMag = prompt("Какое имя вашего магазина?", "").toUpperCase;
	time = new Date();
	hours = time.getHours();
}
start();

mainList  = {
	budget : money,
	shopName : nameMag,
	open: false,   
	shopGoods : [],
	employers : {},
	discount: false,
	price,
	shopItems: [],
	discountPrice: function discountPrice(price) {
		if(mainList.discount = true){
			partPrice = price * 0.8;
		}
	},
	hr: function hr(){
		for (let i = 0; i < 4; i++) {
			employerName = prompt("Введите имя сотрудника:", "");
			mainList.employers[i] = i + " – " + employerName;
		}
	},
	chooseGoods: function chooseGoods() {
		for (let i = 0; i < 3; i++) {
			let nameThing = prompt("Какой тип товара будете продавать?", "");
			if((typeof(nameThing)) === "string" && (typeof(nameThing)) !== null && nameThing.length <= 50 && nameThing != "") {
				mainList.shopGoods.push(nameThing);
			} else {
					alert("Введите тип товаров правильно!");
					i++;
			}
		}	
	},
	workTime: function workTime(hours) {
		if(hours > 8 && hours < 20) {
			mainList.open = true;
			alert("Магазин открыт!");
		} else {
			mainList.open = false;
			alert("Магазин закрыт!\nПриходите с 8:00 до 20:00 по Московскому времени!", "");
		}
	},
	chooseShopItems: function chooseShopItems() {
		let items = prompt("Перечислите через запятую ваши товары:", "");
		mainList.shopItems = items.split(",");
		mainList.shopItems.push(prompt("Подождите, еще:", ""));
		mainList.shopItems.sort();
	}
}

mainList.shopItems.forEach(function(item, i, arr) {
	console.log("У нас вы можете купить:\n" + (i+1) + " : " + mainList.shopItems[i]);
});
	console.log("Наш магазин включает в себя:\n"); 
for (let key in mainList) {
	console.log(key + " – " + mainList[key]);
};

/*discountPrice(100);

hr();

chooseGoods();

workTime(hours);*/


alert("Ваш ежедневный бюджет: " + money/30 + " рублей.");

console.log(mainList);