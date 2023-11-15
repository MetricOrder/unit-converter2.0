
// 1 meter = 3.281 feet
// 1 liter = 0.264 gallon
// 1 kilogram = 2.204 pound

const userInput = document.querySelector("#input-field")
const lengthBtn = document.querySelector("#length-btn")
const weightBtn = document.querySelector("#weight-btn")
const volumeBtn = document.querySelector("#volume-btn")
const resultTitle = document.querySelector("#result-title")
const resultConv = document.querySelector("#result-output")
// const gallonConv = document.querySelector("#gallon")
// const poundConv = document.querySelector("#pound")

lengthBtn.addEventListener("click", function(){
     resultTitle.textContent = `Length (Metres/Feet)`
     resultConv.textContent = `${userInput.value} M = ${(userInput.value * 3.281).toFixed(3)} FT | ${userInput.value} FT = ${(userInput.value / 3.281).toFixed(3)} M`
})
weightBtn.addEventListener("click", function(){
     resultTitle.textContent = `Weight (Kilograms/Pounds)`
     resultConv.textContent = `${userInput.value} KG = ${(userInput.value * 2.204).toFixed(3)} LBS | ${userInput.value} LBS = ${(userInput.value / 2.204).toFixed(3)} KG`
})
volumeBtn.addEventListener("click", function(){
     resultTitle.textContent = `Volume (Litres/Gallons)`
     resultConv.textContent = `${userInput.value} L = ${(userInput.value * 0.264).toFixed(3)} GL | ${userInput.value} GL = ${(userInput.value / 0.264).toFixed(3)} L`
})








// inputBtn.addEventListener("click", function(){
//      feetConv.textContent = `${userInput.value} M = ${(userInput.value * 3.281).toFixed(3)} FT | ${userInput.value} FT = ${(userInput.value / 3.281).toFixed(3)} M`
//      gallonConv.textContent = `${userInput.value} L = ${(userInput.value * 0.264).toFixed(3)} GL | ${userInput.value} GL = ${(userInput.value / 0.264).toFixed(3)} L`
//      poundConv.textContent = `${userInput.value} KG = ${(userInput.value * 2.204).toFixed(3)} LBS | ${userInput.value} LBS = ${(userInput.value / 2.204).toFixed(3)} KG`
// })


// inputBtn.addEventListener("click", function(){
//      feetConv.innerHTML = `<h2>${userInput.value} meters = ${(userInput.value * 3.281).toFixed(3)} feet | ${userInput.value} feet = ${(userInput.value / 3.281).toFixed(3)} meters </h2>`
//      gallonConv.innerHTML = `<h2>${userInput.value} liters = ${(userInput.value * 0.264).toFixed(3)} gallons | ${userInput.value} gallons = ${(userInput.value / 0.264).toFixed(3)} liters.</h2>`
//      poundConv.innerHTML = `<h2>${userInput.value} kilograms = ${(userInput.value * 2.204).toFixed(3)} pounds | ${userInput.value} pounds = ${(userInput.value / 2.204).toFixed(3)} kilograms.</h2>`
// })



// inputBtn.addEventListener("click", render)






// const conversions = [
//      document.querySelector("#feet"),
//      document.querySelector("#gallon"),
//      document.querySelector("#pound")
// ]

// function render(){
//      let convDOM = ""
//      for (let i = 0; i < conversions.length; i++){
//           convDOM += 
//           `<h2> ${userInput.value} meters = ${(userInput.value*3.281).toFixed(3)} feet </h2>`
//           // `<h2> ${userInput.value} liters = ${(userInput.value*0.264).toFixed(3)} gallons </h2>`
//           // `<h2> ${userInput.value} kilograms = ${(userInput.value*2.204).toFixed(3)} pounds </h2>`
//      }
//      conversions.textContent = convDOM  
// }