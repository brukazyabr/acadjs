let title = document.getElementById("title"),
	adv = document.getElementsByClassName("adv"),
	menuItem = document.getElementsByClassName("menu-item"),
	menu = document.getElementsByClassName("menu"),
	fiveEl = document.createElement("fiveEl"),
	getPrompt = document.getElementById("prompt"),
	answer = document.createElement("answer");

fiveEl.classList.add("menu-item");
menu[0].insertBefore(menuItem[2], menuItem[1]);
menu[0].appendChild(fiveEl);
fiveEl.innerHTML = "Пятый пункт";

adv[0].remove();
title.innerHTML = "Мы продаем только подлинную технику  Apple";

document.body.style.backgroundImage = "url(img/apple_true.jpg)";

answer.classList.add("prompt");
getPrompt.appendChild(answer);
answer.innerHTML = prompt("Как вы относитесь к технике Apple?");
