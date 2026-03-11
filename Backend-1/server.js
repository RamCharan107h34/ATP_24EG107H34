// Create HTTP server
import exp from 'express'
const app = exp();
import {userApp} from './APIs/usersAPI.js'
import {ProductApp} from './APIs/ProductAPI.js'

// set a port number
const port = 3000;
// assign port number to HTTP server
app.listen(port,() => console.log(`server listening to port ${port}...`)); // HTTP server is a softwear and computer it is on called web server
/*
// Create API (REST AIP - Representational state Transfer)

    // Route to handle GET req of client (http://localhost:3000/users)
    app.get('/users',(req,res) => {
        // send res to client
        res.json({message:"This res for get users req hello"})
    })
    // Route to handle POST req of client
    app.post('/users',(req,res) => {
        // send res to client
        res.json({message:"this res for create user"})
    })
    // Route to handle PUT req of client
    app.put('/users',(req,res) => {
        // send res to client
        res.json({message:"this res for update user"})
    })
    // Route to handle delete req  of client
    app.delete('/users',(req,res) => {
        // send res to client
        res.json({message:"this res for delete user"})
    })

// the above are dumay response
// In genral the server and api should be in 
*/



// usre body parser middleware(in-built)
app.use(exp.json())

// custome middlewarwe 

function middleware1(req,res,next){
    // send res from middleware
    // res.json({message:"message from middleware 1"})
    console.log("message from middleware 1")
    next()
}

app.use(middleware1)

// forward req to server to userApi if path satarts with /user-api

app.use('/user-api',userApp)

// forward req to server to ProductApi if path satarts with /product-api
app.use('/product-api',ProductApp)



