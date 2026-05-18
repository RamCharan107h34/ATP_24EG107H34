// Find the smallest element in marks array
let marks = [90,78,65,98]

small = marks[0]
for(let i = 1;i < marks.length;i++){
    if(small > marks[i]){
        small = marks[i]
    }
}

console.log("Smallest number is:",small)