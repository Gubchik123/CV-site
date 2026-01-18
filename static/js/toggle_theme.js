console.log("toggle_theme.min.js is loaded");

function set_dark_mode() {
	localStorage.setItem("dark-theme", "yes");
	document.documentElement.setAttribute("theme", "dark");
}

const theme_toggler_btn = document.getElementById("theme_toggler_btn");

theme_toggler_btn.addEventListener("change", () => {
	if (document.documentElement.hasAttribute("theme")) {
		localStorage.setItem("dark-theme", "no");
		document.documentElement.removeAttribute("theme");
	} else set_dark_mode();
});

const dark_system_theme = window.matchMedia("(prefers-color-scheme: dark)");

if (
	localStorage.getItem("dark-theme") == "yes" ||
	search_params.get("theme") == "dark" ||
	dark_system_theme.matches
) {
	set_dark_mode();
	theme_toggler_btn.checked = !theme_toggler_btn.checked;
}
