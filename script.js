var container = document.querySelector(".container");
var currentTime = new Date();
console.log(currentTime.getHours());

function displayTime() {
    console.log("display time function", currentTime);
    setInterval(() => {
        var currentTimeElm = document.createElement("span");
        currentTimeElm.textContent = `Current time: ${currentTime}`;
        var currentDayElm = document.getElementById("currentDay");
        currentDayElm.append(currentTimeElm);
    }, 60000);

};

function handleSaveButton(event) {
    console.log("handle save event", event.currentTarget);
}

function saveToLocalStorage(key = "time", value = "") {
    console.log("current items", JSON.stringify(localStorage.getItem(key)));
}

// get individual buttons set on click attribute ex: someBtn.onclick = handlesavebtn()