/*
Assignment 1: Daily Temperature Analyzer
----------------------------------------
Scenario : You are analyzing daily temperatures recorded by a weather app.

Test data:
const temperatures = [32, 35, 28, 40, 38, 30, 42];

Tasks:
    1. filter() temperatures above 35
    2. map() to convert all temperatures from Celsius → Fahrenheit
    3. reduce() to calculate average temperature
    4. find() first temperature above 40
    5. findIndex() of temperature 28

*/

const temperatures = [32, 35, 28, 40, 38, 30, 42]
// filtered data
let filted = temperatures.filter((element) => element > 35)
console.log(filted)
// maped data
tempInfahrenheit = temperatures.map((element) => (((element/100) * 180) - 32) )
console.log(tempInfahrenheit)

// avg 
let sumOftemp = temperatures.reduce((acc,element) => acc + element)
noOfelements = temperatures.length
console.log(sumOftemp/noOfelements)

// find first temp >40

let temp = temperatures.find((element) => element > 40)
console.log(temp)

//find index of temp 28

index = temperatures.findIndex((element) => element === 28)

console.log(index)