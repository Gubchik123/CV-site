import { ua_lang_obj } from "./translation_into_ua.min.js";

console.log("switch_language.min.js is loaded");

function get_value_from_nested_lang_object(key) {
	return key.split(".").reduce((prev, curr) => {
		return prev ? prev[curr] : null;
	}, ua_lang_obj);
}

function translate_page_to_ua() {
	document.querySelector(".ua_switcher").classList.add("disabled");

	for (const lang_item of document.querySelectorAll(".lang"))
		lang_item.innerHTML = get_value_from_nested_lang_object(
			lang_item.attributes.key.nodeValue
		);
}

let switcher_class;

if (
	localStorage.getItem("language") == "ua" ||
	search_params.get("language") == "ua"
) {
	translate_page_to_ua();
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
	// Clear url params
	window.history.replaceState(null, null, window.location.pathname);
	location.reload();
});
