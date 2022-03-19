function editNav() {
	var x = document.getElementById("myTopnav");
	if (x.className === "topnav") {
		x.className += " responsive";
	} else {
		x.className = "topnav";
	}
}

const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalCloseBtn = document.getElementById("close-modal");
const successMessage = document.getElementById("success-message");
const successClose = document.getElementById("success-close");
const successCloseCross = document.getElementById("close-modal-success");
const body = document.querySelector("body");

modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
modalCloseBtn.addEventListener("click", closeModal);
successClose.addEventListener("click", closeSuccess);
successCloseCross.addEventListener("click", closeSuccess);

function launchModal() {
	modalbg.style.display = "block";
	modalCloseBtn.style.display = "block";
	successMessage.style.display = "none";
	formMessage.setAttribute("data-error-visible", false);
	firstnameMessage.setAttribute("data-error-visible", false);
	lastnameMessage.setAttribute("data-error-visible", false);
	emailMessage.setAttribute("data-error-visible", false);
	birthdateMessage.setAttribute("data-error-visible", false);
	quantityMessage.setAttribute("data-error-visible", false);
	cityMessage.setAttribute("data-error-visible", false);
	cguMessage.setAttribute("data-error-visible", false);
}

function closeModal() {
	modalbg.style.display = "none";
}

function closeSuccess() {
	form.style.display = "block";
	modalbg.style.display = "none";
	successMessage.style.display = "none";
}
