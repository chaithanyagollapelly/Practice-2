let counterValueElement = document.getElementById("counterValue");

let clickCount = localStorage.getItem("clickCount");

if (clickCount === null) {
    counterValueElement.textContent = 0;

} else {
    counterValueElement.textContent = clickCount;
}

function onIncrementCount() {
    let previousCounterValue = counterValueElement.textContent;
    let updatedCounterValue = parseInt(previousCounterValue) + 1;

    localStorage.setItem("clickCount", updatedCounterValue);

    counterValueElement.textContent = updatedCounterValue;
}