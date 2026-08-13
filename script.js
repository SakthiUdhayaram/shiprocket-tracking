const form = document.querySelector("#tracking-form");
const awb = document.querySelector("#awb");
const message = document.querySelector("#form-message");
const result = document.querySelector("#result");
const resultAwb = document.querySelector("#result-awb");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const trackingNumber = awb.value.trim();

  if (trackingNumber.length < 6) {
    result.hidden = true;
    message.textContent = "Please enter a valid AWB or tracking number.";
    awb.focus();
    return;
  }

  message.textContent = "";
  resultAwb.textContent = trackingNumber;
  result.hidden = false;
});