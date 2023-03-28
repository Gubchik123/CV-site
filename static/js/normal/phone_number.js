const phone_number =
	`${8 ** 2 + 3}` +
	`${60 / 2 + 9}` +
	`${20 * 2 * 2}` +
	`${9 ** 2 + 4 ** 2}` +
	`${2 ** 3}`;

for (phone_link of document.querySelectorAll(".phone-link")) {
	phone_link.addEventListener("click", function () {
		window.open(phone_link.href + phone_number);
	});
}
