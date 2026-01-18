console.log("screen_load.min.js is loaded");

const screen_loader = document.getElementById("screen-loader");
const welcome_word =
	localStorage.getItem("language") == "ua" ? "Ласкаво прошу" : "Welcome";

window.addEventListener("load", () => {
	screen_loader.innerHTML = `
                    <ion-icon
                        name="happy"
                        class="me-3 bg-black rounded-circle"
                        style="font-size: 3em; color: yellow;"
                    ></ion-icon>
                    <h1>${welcome_word} !</h1>
                `;
	setTimeout(() => {
		screen_loader.style.animation = "slowHiding 1s normal";
		setTimeout(() => {
			// Timeout for animation
			screen_loader.classList = "d-none";
			screen_loader.style.display = "none";
		}, 1000);
	}, 1000);
});
