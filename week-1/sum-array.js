// Write a function that receives an array as arg and returns their sum

let sum = function (arr){
    let add = 0
    for(let i = 0;i < arr.length;i++){
        add += arr[i] 
    }
    return add
} 

let arr = [55,95,47,36]
console.log(sum(arr))