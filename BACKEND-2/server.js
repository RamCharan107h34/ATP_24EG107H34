import exp from 'express'
import {connect} from 'mongoose'
import {userApp} from "./APIs/UserAPI.js"
import {productApp} from "./APIs/ProductAPI.js"
import cookieParser from "cookie-parser"
import {config} from 'dotenv'
const app = exp()
app.use(exp.json())
app.use(cookieParser())
// connect to DB

config() // process.env.PORT, process.env.DB_URL
async function connectDB() {
    try {
        await connect(process.env.DB_URL)
        console.log("DB connection success");
        let port = process.env.PORT
        // start server
        app.listen(port, ()=>console.log("server on port 4000..."))
    }catch(err){
        console.log("DB connection unsucces")
    }
}

connectDB()

app.use('/user-api',userApp)
app.use('/product-api',productApp)

//error handling middleware

app.use((err,req,res,next)=>{
    // basic err handling: res.json({message:"error occured",error:err.message})

    if (err.name === 'ValidationError'){
        return res.status(400).json({message:"error occurred",error:err.message})
    }

    if (err.name === 'CastError'){
        return res.status(400).json({message:"error occurred",error:err.message})
    }

    res.status(500).json({message:"error occurred",error:err.message})
})


