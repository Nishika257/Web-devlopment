// script.js - Simple Portfolio Script
// 1. Project button - Show Alert
document.getElementById("project").onclick = function (e) {
    if (e.target.dataset.proj) {
        let box = document.getElementById("projectAlert");
        box.textContent = "You clicked"
    }
}