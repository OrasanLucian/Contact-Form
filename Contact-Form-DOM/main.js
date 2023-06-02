const firstNameInput = document.getElementById("first-name");
const lastNameInput = document.getElementById("last-name");
const submitBtn = document.getElementById("buton");
const validationMessage = document.getElementById("request");
const userMessage = document.getElementById("your-message");

submitBtn.addEventListener("click", onSubmitShow);
function onSubmitShow() {
  if (firstNameInput.value.trim() === "" || lastNameInput.value.trim() === "") {
    firstNameInput.style.border = "2px solid";
    firstNameInput.style.borderColor = "red";
    lastNameInput.style.border = "2px solid";
    lastNameInput.style.borderColor = "red";
  } else {
    firstNameInput.style.borderColor = "";
    lastNameInput.style.borderColor = "";
    validationMessage.style.backgroundColor = "greenyellow";
    document.getElementById("request").innerHTML =
      "Thank you for contacting us, " + lastNameInput.value;
    console.log("First name: " + firstNameInput.value);
    console.log("Last name: " + lastNameInput.value);
    console.log("Your message here: " + userMessage.value);
  }
}
