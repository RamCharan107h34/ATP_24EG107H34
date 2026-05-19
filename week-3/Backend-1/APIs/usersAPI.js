// Create mini - expresses  app(Seperate Route)
import exp from 'express'
export const userApp = exp.Router()


// Test data
let users =[]

// Create API (REST AIP - Representational state Transfer)

    // Route to handle GET req of client (http://localhost:3000/users)
    userApp.get('/users',(req,res) => {
        // read all user & send req of client
        res.json({message:"all user",paylod: users})
    })

    // Route to handle POST req of client
    userApp.post('/users',(req,res) => {
        // get user from client
        const newUser = req.body
        // push user into user
        users.push(newUser)
        //send res
        res.json({message:"User created"})

    })

    // Route to handle PUT req of client
    userApp.put('/users',(req,res) => {
        // get modifiedUser of existing user in users arry
        let modifiedUser = req.body
        // get index of existing user in users array
        let index = users.findIndex(userobj => userobj.id === modifiedUser.id)
        // if user not found 
        if(index === -1){
            return res.json({message:"User not found"})
        }
        // udate user 
        users.splice(index,1,modifiedUser)
        // send res
        res.json({message:"User updated"})
    })

    // Route to handle delete req  of client
    userApp.delete('/users/:id',(req,res) => {
        // get id of user from url parameter(args are passed to parameters)
        let idOfUrl = Number(req.params.id) //{normal id is in the form of {id:'5'}}
        // find index of user
        let index = users.findIndex(userobj => userobj.id === idOfUrl)
        // if index is not found
        if(index === -1){
            return res.json({message:"User not found"})
        }

        users.splice(index,1)

        res.json({message:"User deleted"})
    })

    userApp.get('/users/:id',(req,res) => {
        // get id of user from url parameter(args are passed to parameters)
        let idOfUrl = Number(req.params.id)
        // find index of user
        let user = users.find(userobj => userobj.id === idOfUrl)
        // if index is not found
        if(user === undefined){
            return res.json({message:"User not found"})
        }
        // res with user
        res.json({message:"user found",payload: user})
    })
    