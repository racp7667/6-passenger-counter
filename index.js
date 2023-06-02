let count = 0
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
function increment() {
    count = count + 1
    countEl.textContent = count //sets the count value
}
function save() {
    console.log("passenger count: " + count)
    let countScore = count + " - "
    saveEl.textContent += countScore //saves the count value
    countEl.textContent = 0 //resets the count to 0
    count = 0;
}