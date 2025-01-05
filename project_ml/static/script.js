// JavaScript code for handling the yes/no buttons
function setOptionValue(field, value) {
  document.getElementById(field).value = value;
  updateButtonState(field, value);
}

// Function to update the button state
function updateButtonState(field, value) {
  const buttons = document.querySelectorAll(`.yes-no-options button`);
  buttons.forEach((btn) => {
    if (btn.getAttribute("onclick").includes(field)) {
      btn.classList.remove("active");
      if (btn.value == value) {
        btn.classList.add("active");
      }
    }
  });
}

// Example for weather conditions (already provided)
function setWeatherCondition(value) {
  document.getElementById("weather-conditions").value = value;
  updateButtonState("weather-conditions", value);
}

// Select all the weather condition buttons
const weatherBtns = document.querySelectorAll(".weather-btn");

// Add a click event listener to each button
weatherBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Remove the 'active' class from all buttons
    weatherBtns.forEach((btn) => {
      btn.classList.remove("active");
    });

    // Add the 'active' class to the clicked button
    btn.classList.add("active");

    // Set the value of the hidden input field to the value of the clicked button
    document.querySelector("#weather-conditions").value = btn.value;
  });
});

// Add event listeners to yes/no buttons for multiple_deliveries and Festival
const yesNoBtns = document.querySelectorAll(".yes-no-btn");

yesNoBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const field = btn.parentElement.querySelector('input[type="hidden"]').id;
    const value = btn.value;

    // Set yes/no value
    setOptionValue(field, value);
  });
});
