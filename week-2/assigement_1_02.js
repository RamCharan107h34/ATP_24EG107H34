/*
Assignment 2: Online Course Name Processor
------------------------------------------
Scenario : You are preparing a course list for display on a website.

Test data:
const courses = ["javascript", "react", "node", "mongodb", "express"];


Tasks:
    1. filter() courses with name length > 5
    2. map() to convert course names to uppercase
    3. reduce() to generate a single string:
              "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"

    4. find() the course "react"
    5. findIndex() of "node"

*/

const courses = ["javascript", "react", "node", "mongodb", "express"];
console.log(courses)

//filter names with length > 5

let names = courses.filter((name) => name.length > 5)
console.log(names)

//map() to convert course names to uppercase

let upperCasesNames = courses.map((name) => name.toUpperCase())
console.log(upperCasesNames)

// reduce() to generate a single string:  "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"

let str = courses.reduce((acc,name) => acc + " | " + name)
console.log(str)

// find() the course "react"

let name = courses.find((name) => name.toLowerCase() === "react")

console.log(name)

// findIndex() of "node"

let indexOfnode = courses.findIndex((name) => name === "node")
console.log(indexOfnode)

