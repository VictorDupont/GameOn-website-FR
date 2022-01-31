const emailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
const birthdateRegex = /^(19|20)\d{2}[-](0?[1-9]|1[012])[-](0[1-9]|[12]\d|3[01])$/;
const quantityRegex = /^\+?(0|[1-9]\d*)$/;

function RegexFormat(string, regex) {
	return regex.test(string);
}

function lengthCheck(stringLength, lengthRequired) {
	return stringLength >= lengthRequired;
}

function isRadioChecked() {
	return document.querySelectorAll("input[type=radio]:checked").length > 0;
}

function isCheckboxChecked(id) {
	return document.getElementById(id).checked;
}

const form = document.getElementById("reservation");
const successCloseBtn = document.getElementById("success-close-btn");

form.addEventListener("submit", validation);

const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const city = document.querySelector("input[type=radio]");
const cgu = document.getElementById("cgu");

const firstnameMessage = document.getElementById("data-firstname");
const lastnameMessage = document.getElementById("data-lastname");
const emailMessage = document.getElementById("data-email");
const birthdateMessage = document.getElementById("data-birthdate");
const quantityMessage = document.getElementById("data-quantity");
const cityMessage = document.getElementById("data-city");
const cguMessage = document.getElementById("data-cgu");

function firstnameCheck() {
	let firstnameValidation = lengthCheck(firstname.value.length, 2);
	if (!firstnameValidation) firstnameMessage.setAttribute("data-error-visible", true);
	return firstnameValidation;
}

function lastnameCheck() {
	let lastnameValidation = lengthCheck(lastname.value.length, 2);
	if (!lastnameValidation) lastnameMessage.setAttribute("data-error-visible", true);
	return lastnameValidation;
}

function emailCheck() {
	let emailValidation = RegexFormat(email.value, emailRegex);
	if (!emailValidation) emailMessage.setAttribute("data-error-visible", true);
	return emailValidation;
}

function birthdateCheck() {
	let birthdateValidation = RegexFormat(birthdate.value, birthdateRegex);
	if (!birthdateValidation) birthdateMessage.setAttribute("data-error-visible", true);
	return birthdateValidation;
}

function quantityCheck() {
	let quantityValidation = RegexFormat(quantity.value, quantityRegex);
	if (!quantityValidation) quantityMessage.setAttribute("data-error-visible", true);
	return quantityValidation;
}

function cityCheck() {
	let cityValidation = isRadioChecked();
	if (!cityValidation) cityMessage.setAttribute("data-error-visible", true);
	return cityValidation;
}

function cguCheck() {
	let cguValidation = isCheckboxChecked("cgu");
	if (!cguValidation) cguMessage.setAttribute("data-error-visible", true);
	return cguValidation;
}

function formValided() {
	form.style.display = "none";
	successMessage.style.display = "block";
}

function validation(event) {
	event.preventDefault();
	let firstnameValide = firstnameCheck();
	let lastnameValide = lastnameCheck();
	let emailValide = emailCheck();
	let birthdateValide = birthdateCheck();
	let quantityValide = quantityCheck();
	let cityValide = cityCheck();
	let cguValide = cguCheck();

	let valide =
		firstnameValide &&
		lastnameValide &&
		emailValide &&
		birthdateValide &&
		quantityValide &&
		cityValide &&
		cguValide;

	if (valide) formValided();
	modalCloseBtn.style.display = "none";
}
