let number = document.getElementById("number")
let n = 0
number.textContent = n



const incomeButton = document.getElementById("incomeButton")
const expenseButton = document.getElementById("expenseButton")


incomeButton.addEventListener("click", function () {
const incomeInput = document.getElementById("incomeInput")
console.log(incomeInput.value);
n += Number(incomeInput.value)
number.textContent = n
incomeInput.value = ""

})

expenseButton.addEventListener("click", function ()  {
    const expenseInput = document.getElementById("expenseInput")
    console.log(expenseInput.value);
    n -= Number(expenseInput.value)
    number.textContent = n
    expenseInput.value = ""
})




    