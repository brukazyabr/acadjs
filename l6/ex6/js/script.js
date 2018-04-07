
let money, time, hours, price, partPrice, employerName,
	openBtn = document.getElementById("open-btn"),
	
	name_value = document.getElementsByClassName("name-value")[0],
	budget_value = document.getElementsByClassName("budget-value")[0],
	goods_value = document.getElementsByClassName("goods-value"),
	items_value = document.getElementsByClassName("items-value"),
	employers_value = document.getElementsByClassName("employers-value"),
	discount_value = document.getElementsByClassName("discount-value"),
	isopen_value = document.getElementsByClassName("isopen-value"),
	goods_item = document.getElementsByClassName("goods-item"),
	
	goodsItemBtn = document.getElementsByTagName("goods-item-btn"),
	countBudgetValue = document.getElementsByTagName("count-budget-btn"),
	employersBtn = document.getElementsByTagName("hire-employers-btn"),
	
	chooseItem = document.querySelector("choose-item"),
	countBudget = document.querySelector("count-budget-value"),
	timeValue= document.querySelector("time-value"),
	headHunt = document.querySelectorAll("hire-employers-item");


openBtn.addEventListener('click',() => {
	money = +prompt("Какой ваш бюджет на месяц в рублях?", "");
	while(isNaN(money) || money == null || money == "") {
		money = +prompt("Какой ваш бюджет на месяц в рублях?", "");
	}
	budget_value.textContent = money;
	name_value.textContent = prompt("Какое имя вашего магазина?", "").toUpperCase();
	time = new Date();
	hours = time.getHours();
});


mainList  = {
	budget : money,
	shopName : name_value,
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
			alert("Магазин закрыт!\nПриходите с 8:00 до 20:00!", "");
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

for (let key in mainList) {
	console.log("Наш магазин включает в себя:\n" + key + " – " + mainList[key]);
};



alert("Ваш ежедневный бюджет: " + money/30 + " рублей.");

console.log(mainList);