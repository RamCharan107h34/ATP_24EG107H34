/*
ASSIGNMENT 2:
-------------
Student Performance Dashboard

You are working on a college result analysis system.

Test Data:
const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

Tasks:
    1. filter() students who passed (marks ≥ 40)
    2. map() to add a grade field
              ≥90 → A
              ≥75 → B
              ≥60 → C
              else → D

   3. reduce() to calculate average marks
   4. find() the student who scored 92
   5. findIndex() of student "Kiran"
*/

const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

// 1. filter() students who passed (marks ≥ 40)

let passedList = students.filter((student) => student.marks >= 40)
console.log("passed List:\n",passedList)

/* 2. map() to add a grade field
              ≥90 → A
              ≥75 → B
              ≥60 → C
              else → D
*/

let gradeList = passedList.map((std) =>{
  if(std.marks >= 90){
    std.grade = 'A'
  } else if(std.marks >= 75){
    std.grade = 'B'
  } else if(std.marks >= 60){
    std.grade = 'C'
  } else{
    std.grade = 'D'
  }
  return std
})

console.log(gradeList)

// 3. reduce() to calculate average marks

let totalMarks = gradeList.reduce((acc,std) => acc + std.marks,0)
let avg = totalMarks/(gradeList.length)
console.log("Avg:",avg)

// 4. find() the student who scored 92
let student92 = students.find((std)=> std.marks === 92)
console.log("Student with score 92:", student92)

// 5. findIndex() of Kiran
let kiranIndex = students.findIndex((std)=> std.name === "Kiran")
console.log("Index of Kiran:", kiranIndex)