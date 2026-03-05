// write a function that receives 3 numbers args and return the big number

let largest = function (a,b,c){
    if(a > b && a > c ){
        return a
    }else if(b > a && b > c){
        return b
    }else{
        return c
    }
}

let result = largest(10,25,82)
console.log(result)