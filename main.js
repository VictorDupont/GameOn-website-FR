let emailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
let birthdateRegex = /^(19|20)\d{2}[-](0?[1-9]|1[012])[-](0[1-9]|[12]\d|3[01])$/;
let quantityRegex = /^\+?(0|[1-9]\d*)$/;

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
const successMessage = document.getElementById("success-message");
const successCloseBtn = document.getElementById("success-close-btn");

form.addEventListener("submit", validation);

let firstname = document.getElementById("firstname");
let lastname = document.getElementById("lastname");
let email = document.getElementById("email");
let birthdate = document.getElementById("birthdate");
let quantity = document.getElementById("quantity");
let city = document.querySelector("input[type=radio]");
let cgu = document.getElementById("cgu");

let firstnameMessage = document.getElementById("data-firstname");
let lastnameMessage = document.getElementById("data-lastname");
let emailMessage = document.getElementById("data-email");
let birthdateMessage = document.getElementById("data-birthdate");
let quantityMessage = document.getElementById("data-quantity");
let cityMessage = document.getElementById("data-city");
let cguMessage = document.getElementById("data-cgu");

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
}
