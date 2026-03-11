/*
Assignment 3: Student Marks List
--------------------------------
Scenario : You receive marks from an exam system.

Test data:
const marks = [78, 92, 35, 88, 40, 67];

Tasks:
    1. filter() marks ≥ 40 (pass marks)
    2. map() to add 5 grace marks to each student
    3. reduce() to find highest mark
    4. find() first mark below 40
    5. findIndex() of mark 92
*/

const marks = [78, 92, 35, 88, 40, 67];

// filter() marks ≥ 40 (pass marks)
marks_above40 = marks.filter((element) => element > 40)
console.log("marks greater then 40:",marks_above40)

// map() to add 5 grace marks to each student

gracedMarks = marks.map((element) => element + 5)
console.log("marks after grace:",gracedMarks)

// reduce() to find highest mark

highestMarks = marks.reduce((acc,element) => acc > element?acc:element)
console.log("hights marks:",highestMarks)

// find() first mark below 40

markLess40 = marks.find((element) => element < 40)
console.log("first mark below 40:",markLess40)

// findIndex() of mark 92

indexOf90 = marks.findIndex((element) => element === 92)
console.log("Index of 92:",indexOf90)