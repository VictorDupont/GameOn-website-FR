// Regex formats

const emailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
const birthdateRegex = /^(19|20)\d{2}[-](0?[1-9]|1[012])[-](0[1-9]|[12]\d|3[01])$/;
const quantityRegex = /^\+?(0|[1-9]\d*)$/;

// Check functions - Check regex format, lenght input and if radio or checkbox is checked

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
	// console.log(document.getElementById(id).checked);
	return document.getElementById(String(id)).checked;
}

const form = document.getElementById("reservation");
const successCloseBtn = document.getElementById("success-close-btn");

form.addEventListener("submit", validation);

// DOM elements - Get all of these to interact

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
const formMessage = document.getElementById("data-form");

// All check functions for the form inputs

// Example with firstnameCheck function
// Declare a variable with function which checks the lenght of the firstname input, which must be 2 characters at least
// If the check function return false, the error message is displayed
// The function return the variable output (useful for the main function at the bottom)

function firstnameCheck() {
	let firstnameValidation = lengthCheck(firstname.value.trim().length, 2);
	if (!firstnameValidation) firstnameMessage.setAttribute("data-error-visible", true);
	else firstnameMessage.setAttribute("data-error-visible", false);
	return firstnameValidation;
}

function lastnameCheck() {
	let lastnameValidation = lengthCheck(lastname.value.length, 2);
	if (!lastnameValidation) lastnameMessage.setAttribute("data-error-visible", true);
	else lastnameMessage.setAttribute("data-error-visible", false);
	return lastnameValidation;
}

function emailCheck() {
	let emailValidation = RegexFormat(email.value, emailRegex);
	if (!emailValidation) emailMessage.setAttribute("data-error-visible", true);
	else emailMessage.setAttribute("data-error-visible", false);
	return emailValidation;
}

function birthdateCheck() {
	let birthdateValidation = RegexFormat(birthdate.value, birthdateRegex);
	if (!birthdateValidation) birthdateMessage.setAttribute("data-error-visible", true);
	else birthdateMessage.setAttribute("data-error-visible", false);
	return birthdateValidation;
}

function quantityCheck() {
	let quantityValidation = RegexFormat(quantity.value, quantityRegex);
	if (!quantityValidation) quantityMessage.setAttribute("data-error-visible", true);
	else quantityMessage.setAttribute("data-error-visible", false);
	return quantityValidation;
}

function cityCheck() {
	let cityValidation = isRadioChecked();
	if (!cityValidation) cityMessage.setAttribute("data-error-visible", true);
	else cityMessage.setAttribute("data-error-visible", false);
	return cityValidation;
}

function cguCheck() {
	let cguValidation = isCheckboxChecked("cgu");
	if (!cguValidation) cguMessage.setAttribute("data-error-visible", true);
	else cguMessage.setAttribute("data-error-visible", false);
	return cguValidation;
}

// Remove the form from the user visibility and display a success message to him

function formValided() {
	form.style.display = "none";
	successMessage.style.display = "block";
	let buttonAbsolute = document.getElementById("btnsubmit");
	buttonAbsolute.classList.add("absolute");
}

// Main function, blocks the refresh initial action of the form.
// Checks all inputs with their function
// When all of these are valided, the formValided function is called and the close button is set to hidden.

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

	if (valide) {
		formValided();
		modalCloseBtn.style.display = "none";
		document.getElementById("reservation").reset();
	} else {
		formMessage.setAttribute("data-error-visible", true);
	}
}
