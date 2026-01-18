console.log("scrolling.min.js is loaded");

var last_scroll_top = 0;

function check_on_scroll() {
	var current_scroll_top =
		window.pageYOffset || document.documentElement.scrollTop;

	if (navigation_menu.classList.contains("position-fixed")) {
		if (current_scroll_top > last_scroll_top) {
			navigation_menu.style.top = "0";
			control_menu.style.top = "-100px";
		} else {
			navigation_menu.style.top = "53px";
			control_menu.style.top = "0";
		}
	}
	window.pageYOffset + 50 >= navigation_menu_offset_top
		? slow_appearing()
		: slow_hiding();

	last_scroll_top = current_scroll_top <= 0 ? 0 : current_scroll_top; // For Mobile or negative scrolling
}

function slow_appearing() {
	if (!navigation_menu.classList.contains("position-fixed")) {
		navigation_menu.style.top = "53px";
		navigation_menu.classList = "position-fixed w-100";

		navbar_brand.style.animation = go_to_top_btn.style.animation =
			"slowAppearing 0.3s normal";

		setTimeout(() => {
			// Timeout for animation
			navbar_nav.classList.remove("me-auto");
			navbar_brand.classList.replace("d-none", "d-flex");
			go_to_top_btn.classList =
				"rounded-circle d-flex justify-content-center align-items-center";
		}, 300);
	}
}

function slow_hiding() {
	if (!navigation_menu.classList.contains("position-relative")) {
		navigation_menu.style.top = "0";
		navigation_menu.classList = "position-relative";

		navbar_brand.style.animation = go_to_top_btn.style.animation =
			"slowHiding 0.3s normal";

		setTimeout(() => {
			// Timeout for animation
			navbar_nav.classList.add("me-auto");
			navbar_brand.classList.add("d-none");
			go_to_top_btn.classList = "";
		}, 300);
	}
}

const control_menu = document.getElementById("control-menu"),
	navigation_menu = document.getElementById("navigation-menu"),
	navigation_menu_offset_top = navigation_menu.offsetTop,
	navbar_brand = document.getElementById("navbar-brand"),
	navbar_nav = document.getElementById("navbar-nav"),
	go_to_top_btn = document.getElementById("go-to-top-btn");

go_to_top_btn.addEventListener("click", function () {
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0; // For Chrome, Firefox and IE
});

// When the user scrolls down 550px from the top of the document, show the button
window.addEventListener("scroll", check_on_scroll);

check_on_scroll(); // Check the window position at startup
