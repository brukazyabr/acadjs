var week = ["mon" , "tue" , "wed" , "thu" , "fri" , "sat" , "san"];
var day = new Date();
var i = day.getUTCDay();
var today = week[i - 1];
for (var m = 0; m < 5; m++) {
	if (m == (i - 1)) {
		document.write(today.italics() + "\n");
	} else {
		document.write(week[m] + "\n");
	}
}
for (n = 5; n < 7; n++) {
	document.write(week[n].bold() + "\n");
}