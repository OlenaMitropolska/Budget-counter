//stage 1
let number = document.getElementById("number")
let n = 0
number.textContent = n

//stage 2
let incomeSum = document.getElementById("incomeSum")
let incomeS = 0
incomeSum.textContent = incomeS

let expenseSum = document.getElementById("expenseSum")
let expenseS = 0
expenseSum.textContent = expenseS

//stage 3
let incomeMessageInput = document.getElementById("incomeMessageInput")
let expenseMessageInput = document.getElementById("expenseMessageInput")
let messageIncome = document.getElementById("messageIncome")
let messageExpense = document.getElementById("messageExpense")
// messageIncome.textContent = incomeMessageInput
// messageExpense.textContent = expenseMessageInput


const incomeButton = document.getElementById("incomeButton")
const expenseButton = document.getElementById("expenseButton")


incomeButton.addEventListener("click", function () {
const incomeInput = document.getElementById("incomeInput")
// console.log(incomeInput.value);
n += Number(incomeInput.value)
number.textContent = n
incomeS += Number(incomeInput.value)
incomeSum.textContent = incomeS

messageIncome.textContent += incomeMessageInput.value

incomeInput.value = ""
incomeMessageInput.value = ""
})

expenseButton.addEventListener("click", function ()  {
    const expenseInput = document.getElementById("expenseInput")
    // console.log(expenseInput.value);
    n -= Number(expenseInput.value)
    number.textContent = n
    expenseS += Number(expenseInput.value)
    expenseSum.textContent = expenseS

    messageExpense.textContent += expenseMessageInput.value

    expenseInput.value = ""
    expenseMessageInput.value = ""
})




    