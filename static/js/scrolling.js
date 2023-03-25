const navbar_brand = document.getElementById("navbar-brand");
const navbar_nav = document.getElementById("navbar-nav");

const go_to_top_btn = document.getElementById("go-to-top-btn");
go_to_top_btn.addEventListener("click", function () {
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0; // For Chrome, Firefox and IE
});

function check_on_scroll() {
	if (
		document.body.scrollTop > 550 ||
		document.documentElement.scrollTop > 550
	)
		slow_appearing();
	else slow_hiding();
}

function slow_appearing() {
	navbar_brand.style.animation = go_to_top_btn.style.animation =
		"slowAppearing 0.3s normal";

	setTimeout(() => {
		// Timeout for animation
		navbar_nav.classList.remove("me-auto");
		navbar_brand.classList.remove("d-none");
		go_to_top_btn.classList =
			"rounded-circle d-flex justify-content-center align-items-center";
	}, 300);
}

function slow_hiding() {
	navbar_brand.style.animation = go_to_top_btn.style.animation =
		"slowHiding 0.3s normal";

	setTimeout(() => {
		// Timeout for animation
		navbar_nav.classList.add("me-auto");
		navbar_brand.classList.add("d-none");
		go_to_top_btn.classList = "";
	}, 300);
}

// When the user scrolls down 550px from the top of the document, show the button
window.addEventListener("scroll", check_on_scroll);

check_on_scroll(); // Check the window position at startup
