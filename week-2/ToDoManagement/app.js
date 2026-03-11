import {addTask,getAllTasks,completeTask} from './task.js'

addTask("eat","high","2026-02-26")
addTask("sleep","medium","2026-02-27")

console.log(getAllTasks())

completeTask(0)

console.log(getAllTasks())

