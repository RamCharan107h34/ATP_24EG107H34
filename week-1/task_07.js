/*
write a function that receves an aray and search element as args and 
returns the index of the search element in the array. It should return 
not found when search element not found
*/

let find = function(arr,k){
    for(let i = 0;i < arr.length;i++){
        if(k === arr[i]){
            return i
        }
    }
}

arr = [98,65,72,58,72]
k = 58
console.log(find(arr,k))