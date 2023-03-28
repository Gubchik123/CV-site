const fileModalLabel = document.getElementById("fileModalLabel");
const fileModalIframe = document.getElementById("fileModalIframe");

for (const link_to_fileModal of document.querySelectorAll(".fileModal-link")) {
	link_to_fileModal.addEventListener("click", function () {
		const lang = localStorage.getItem("language");
		fileModalLabel.innerText =
			link_to_fileModal.attributes[`modal-title-${lang}`].nodeValue;
		fileModalIframe.src =
			link_to_fileModal.attributes["modal-file-link"].nodeValue;
	});
}
