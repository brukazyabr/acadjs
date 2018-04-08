
let money, price, partPrice, employerName,

	openBtn = document.getElementById("open-btn"),
	
	name_value = document.getElementsByClassName("name-value")[0],
	budget_value = document.getElementsByClassName("budget-value")[0],
	goods_value = document.getElementsByClassName("goods-value")[0],
	items_value = document.getElementsByClassName("items-value")[0],
	employers_value = document.getElementsByClassName("employers-value")[0],
	discount_value = document.getElementsByClassName("discount-value")[0],
	isopen_value = document.getElementsByClassName("isopen-value")[0],
	goods_item = document.getElementsByClassName("goods-item"),
	
	goodsItemBtn = document.getElementsByTagName("button")[1],
	countBudgetValue = document.getElementsByTagName("button")[2],
	employersBtn = document.getElementsByTagName("button")[3],
	
	chooseItem = document.querySelector(".choose-item"),
	countBudget = document.querySelector(".count-budget-value"),
	timeValue= document.querySelector(".time-value"),
	headHunt = document.querySelectorAll(".hire-employers-item");


openBtn.addEventListener('click', () => {
	money = +prompt("Какой ваш бюджет на месяц в рублях?", "");
	while(isNaN(money) || money == null || money == "") {
		money = +prompt("Какой ваш бюджет на месяц в рублях?", "");
	}
	budget_value.textContent = money;
	name_value.textContent = prompt("Какое имя вашего магазина?", "").toUpperCase();
});

goodsItemBtn.addEventListener('click', () => {
	for (let i = 0; i < goods_item.length; i++) {
		let nameThing = goods_item[i].value;
		if((typeof(nameThing)) === "string" && (typeof(nameThing)) !== null && nameThing.length <= 50) {
				mainList.shopGoods.push(nameThing);
				goods_value.textContent = mainList.shopGoods;
		} else {	
				alert("Введите тип товаров правильно!");
				i++;
		}
	}	
});

chooseItem.addEventListener('change', () => {
	let items = chooseItem.value;
	if (isNaN(items) && items != "") {
		mainList.shopItems = items.split(",");
		mainList.shopItems.sort();
		items_value.textContent = mainList.shopItems;
	}
});

timeValue.addEventListener('change', () => {
	let time = timeValue.value;

	if(time >= 8 && time <= 20) {
		mainList.open = true;
		isopen_value.style.backgroundColor = "green";
	} else {
		mainList.open = false;
		isopen_value.style.backgroundColor = "red";
		alert("Магазин закрыт!\nПриходите с 8:00 до 20:00!", "");
	}
});

countBudgetValue.addEventListener('click', () => {
	countBudget.value = money/30;
});

employersBtn.addEventListener('click', () => {
	for (let i = 0; i < headHunt.length; i++) {
			let employerName = headHunt[i].value;
			mainList.employers[i] = employerName;
			employers_value.textContent += mainList.employers[i] + ", ";
		}
});

discount_value.addEventListener('click', () => {
	if (mainList.discount == false) {
		mainList.discount = true;
		partPrice = price * 0.8;
		discount_value.style.backgroundColor = "green";
	} else {
		mainList.discount = false;
		discount_value.style.backgroundColor = "red";
	
	}
});

mainList  = {
	budget : money,
	shopName : name_value,
	open: false,   
	shopGoods : [],
	employers : {},
	discount: false,
	price,
	shopItems: []
}