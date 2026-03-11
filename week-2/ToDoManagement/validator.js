
let ValidateTitle =function (title){
    if(!title){
        console.log("Title is empty")
        return false
    }
    if(title.length < 3){
        console.log("Title is less than 3 char")
        return false
    }

    return true
}

let ValidatePriority = function (priority){
    let listOfPrioritys = ["low", "medium", "high"]
    let result = listOfPrioritys.includes(priority)
    if(result === false){
        console.log("invalid priority")
        return false
    }
    return true
}

let ValidateDueDate = function (date){
    let duedate = new Date("2026-02-25") //yyyy-mm-dd
    if(date < duedate){
        return false
    }
    return true
}

export {ValidateTitle,ValidatePriority,ValidateDueDate}