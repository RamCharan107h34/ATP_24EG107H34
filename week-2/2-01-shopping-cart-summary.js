/* 
ASSIGNMENT 1:
-------------
You are building a shopping cart summary for an e-commerce website.

Test Data : 
const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

Tasks:
    1. Use filter() to get only inStock products
    2. Use map() to create a new array with:  { name, totalPrice }
    3. Use reduce() to calculate grand total cart value
    4. Use find() to get details of "Mouse"
    5. Use findIndex() to find the position of "Keyboard"

*/


const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

// Use filter() to get only inStock products

let productInStock = cart.filter((element) => element.inStock === true)
console.log(productInStock)

// Use map() to create a new array with:  { name, totalPrice }

let newarr = productInStock.map((item) => {
    return {
        Name: item.name,
        Totalprice: (item.price * item.quantity)
    }
})

console.log(newarr)

// Use reduce() to calculate grand total cart value

let grandTotal = newarr.reduce((acc,item) => acc + item.Totalprice,0)
console.log("Grand total:",grandTotal)

// Use find() to get details of "Mouse"
let moseItem = cart.find((item) => item.name === "Mouse")
console.log(moseItem)

// Use findIndex() to find the position of "Keyboard"

let indexOfKeyBord = cart.find((item) => item.name === "Keyboard")
console.log(indexOfKeyBord)