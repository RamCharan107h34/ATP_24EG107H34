import {ValidateTitle,ValidatePriority,ValidateDueDate} from './validator.js'

let task = []

let addTask = function (title, priority, dueDate){
    if(!ValidateTitle(title) && !ValidatePriority(priority) && !ValidateDueDate(dueDate)){
        console.log("Can't add task")
    }

    task.push({Title:title,Priority: priority, DueDate:dueDate,Completed: false})
}

let getAllTasks = function () {
    return task
}

let completeTask = function (taskId) {
    // Find task and mark as complete
    if(task[taskId].Completed === false){
        task[taskId].Completed = true
    }
}

export {addTask,getAllTasks,completeTask}