let billAmountInput = document.getElementById("billAmount");
let percentageTipinput = document.getElementById("percentageTip");
let tipAmountInput = document.getElementById("tipAmount");
let totalInput = document.getElementById("totalAmount");
let errorMessageElement = document.getElementById("errorMessage");
let errorMessage = "Please Enter a Valid Input.";

function calculateTip() {
    let billAmountInputValue = billAmountInput.value;
    let percentageTipinputValue = percentageTipinput.value;

    if (billAmountInputValue === "") {
        errorMessageElement.textContent = errorMessage
    } else if (percentageTipinputValue === "") {
        errorMessageElement.textContent = errorMessage
    } else {
        errorMessageElement.textContent = ""
        let billAmount = parseInt(billAmountInputValue);
        let percentageTip = parseInt(percentageTipinputValue);

        let calculatedTip = (percentageTip / 100) * billAmount;
        let calculatedTotal = billAmount + calculatedTip;

        tipAmountInput.value = calculatedTip;
        totalInput.value = calculatedTotal
    }
}