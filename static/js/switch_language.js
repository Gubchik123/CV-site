import { ua_lang_dict } from "./ua_lang.js";

function switch_language() {
	document.querySelector(".ua_switcher").classList.add("disabled");

	for (const lang_item of document.querySelectorAll(".lang")) {
		lang_item.textContent =
			ua_lang_dict[lang_item.attributes.key.nodeValue];
	}
}

let switcher_class;

if (localStorage.getItem("language") == "ua") {
	switch_language();
	switcher_class = "en";
} else {
	switcher_class = "ua";

	const en_switcher = document.querySelector(".en_switcher");
	en_switcher.classList.add("disabled");
}

const switch_language_btn = document.querySelector(
	`.${switcher_class}_switcher`
);
switch_language_btn.addEventListener("click", function () {
	if (localStorage.getItem("language") == "ua")
		localStorage.setItem("language", "en");
	else localStorage.setItem("language", "ua");

	location.reload();
});
