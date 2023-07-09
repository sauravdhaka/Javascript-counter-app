let count = 0
//document.getElementById("count-el").innerText=count

// let count = 0

// console.log(count)
let saveEl = document.getElementById("save-el")
function increment(){
    count +=  1
    document.getElementById("count-el").textContent=count
    console.log("The button was clicked")
}
 
function save(){
    let countStr = count + " - "
    saveEl.textContent += countStr
    count = 0
    document.getElementById("count-el").textContent=count
}