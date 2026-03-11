/*
ASSIGNMENT 3:
-------------
Employee Payroll Processor

You are building a salary processing module in a company HR app.

Test data:
const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

Tasks:
    1. filter() employees from IT department
    2. map() to add:
            netSalary = salary + 10% bonus

    3. reduce() to calculate total salary payout
    4. find() employee with salary 30000
    5. findIndex() of employee "Neha"
*/

const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

// 1. filter() employees from IT department
let itEmployees = employees.filter((emp) => emp.department === "IT")
console.log("IT Employees:\n", itEmployees)

// 2. map() add netSalary
let salaryWithBonus = employees.map((emp) => {
  emp.netSalary = emp.salary + emp.salary * 0.10
  return emp
})
console.log("Employees with Bonus:\n", salaryWithBonus)

// 3. reduce() total salary payout
let totalSalary = employees.reduce((acc,emp)=> acc + emp.salary,0)
console.log("Total Salary:", totalSalary)

// 4. find() employee with salary 30000
let emp30000 = employees.find((emp) => emp.salary === 30000)
console.log("Employee with salary 30000:", emp30000)

// 5. findIndex() of Neha
let nehaIndex = employees.findIndex((emp) => emp.name === "Neha")
console.log("Index of Neha:", nehaIndex)