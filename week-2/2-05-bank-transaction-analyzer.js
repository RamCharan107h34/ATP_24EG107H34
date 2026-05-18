/*
ASSIGNMENT 5:
-------------
Bank Transaction Analyzer
*/

const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];

// 1. filter() credit transactions
let credits = transactions.filter((tran) => tran.type === "credit")
console.log("Credit Transactions:\n", credits)

// 2. map() extract amounts
let amounts = transactions.map((tran) => tran.amount)
console.log("Transaction Amounts:\n", amounts)

// 3. reduce() calculate final balance
let balance = transactions.reduce((acc,tran)=>{
  if(tran.type === "credit"){
    return acc + tran.amount
  } else{
    return acc - tran.amount
  }
},0)

console.log("Final Balance:", balance)

// 4. find() first debit transaction
let firstDebit = transactions.find((tran) => tran.type === "debit")
console.log("First Debit Transaction:", firstDebit)

// 5. findIndex() transaction with amount 10000
let indexOf10000 = transactions.findIndex((tran) => tran.amount === 10000)
console.log("Index of transaction 10000:", indexOf10000)