console.log("send_form.min.js is loaded");

document.forms["write-me"].addEventListener("submit", (e) => {
	e.preventDefault();

	const form = e.target,
		form_data = new FormData(form);

	form.reset();

	const success_message = localStorage.getItem(
		"ua" == localStorage.getItem("language")
	)
		? "Дякую за повідомлення :)"
		: "Thank you for your message :)";

	const error_message = localStorage.getItem(
		"ua" == localStorage.getItem("language")
	)
		? "Виникла помилка!"
		: "There was an error!";

	fetch("/", {
		method: "POST",
		headers: { "Content-Type": "application/x-www-form-urlencoded" },
		body: new URLSearchParams(form_data).toString(),
	})
		.then(() => alert(success_message))
		.catch((error) => {
			console.log(error), alert(error_message);
		});
});
