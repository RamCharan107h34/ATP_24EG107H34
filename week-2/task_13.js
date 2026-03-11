/*
Exercise 3: Create a function that receives any number of args as arguments and return their sum using REST parameter
*/

const findSum = function(...nums){ 
    return nums.reduce((sum,num) => sum + num)
}

console.log(findSum(10,20,30,40))
