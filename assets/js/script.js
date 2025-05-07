// HTML DOM Elements
const textBox = document.getElementById("textBox");
const toCelsius = document.getElementById("toCelsius");
const toFahrenheit = document.getElementById("toFahrenheit");
const submitBtn = document.getElementById("submitBtn");
const result = document.getElementById("result");

// Declare temperature variable
let temperature;

function convert(event) {
  // Prevent the page from refreshing
  event.preventDefault();
  // If user wants to convert from fahrenheit to celsius
  if (toCelsius.checked) {
    temperature = Number(textBox.value);
    temperature = (temperature - 32) * (5 / 9);
    result.textContent = temperature.toFixed(1) + " °Celsius";
    // If user wants to convert from celsius to fahrenheit
  } else if (toFahrenheit.checked) {
    temperature = Number(textBox.value);
    temperature = (temperature * 9) / 5 + 32;
    result.textContent = temperature.toFixed(1) + " °Fahrenheit";
    // If user has not selected a conversion type
  } else {
    result.textContent = "SELECT A UNIT!";
  }
  result.classList.remove("hidden");
}

// Listen for a click event on "CONVERT" button, then call convert function
submitBtn.addEventListener("click", convert);
