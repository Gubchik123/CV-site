const navbar_brand = document.getElementById("navbar-brand");
const navbar_nav = document.getElementById("navbar-nav");

const go_to_top_btn = document.getElementById("go-to-top-btn");
go_to_top_btn.addEventListener("click", function () {
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0; // For Chrome, Firefox and IE
});

// When the user scrolls down 550px from the top of the document, show the button
window.onscroll = function () {
	if (
		document.body.scrollTop > 550 ||
		document.documentElement.scrollTop > 550
	) {
		navbar_nav.classList.remove("me-auto");
		navbar_brand.classList.remove("d-none");
		go_to_top_btn.classList =
			"rounded-circle d-flex justify-content-center align-items-center";
	} else {
		go_to_top_btn.classList = "";
		navbar_nav.classList.add("me-auto");
		navbar_brand.classList.add("d-none");
	}
};
