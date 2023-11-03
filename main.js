const plus = document.getElementById("plus")
const reset = document.getElementById("reset")
const minus = document.getElementById("minus")

let n = document.getElementById("number")

//khaled version 2 (better)

let number = 0
n.textContent = number

plus.addEventListener("click", function () {
        number += 1
n.textContent = number
      }) 

      minus.addEventListener("click", function () {
        number -= 1
n.textContent = number
      }) 

      reset.addEventListener("click", function () {
        number = 0
n.textContent = number
      }) 



//my version 

// let i = 0

// plus.addEventListener("click", function() {
// i++
// n.innerHTML = i;
// })

// minus.addEventListener("click", function() {

//     i--
//     n.innerHTML = i;
//     })


//     reset.addEventListener("click", function() {
// i = 0

// n.innerHTML = i;
//         })

//khaled version 1

    //   plus.addEventListener("click", function () {
    //     n.textContent = Number(N:this.textContent) + 1
    //   }) 


