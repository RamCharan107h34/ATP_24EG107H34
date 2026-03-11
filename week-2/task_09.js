// find small element using reduce

testdata = [90,45,-12,65,73]

r1 = testdata.reduce((acc,element) => acc < element?acc:element)

// find big element using reduce

r2 = testdata.reduce((acc,element) => acc > element?acc:element)

console.log(r1,r2)