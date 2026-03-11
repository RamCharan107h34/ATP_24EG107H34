import exp from 'express'
import {connect} from 'mongoose'
import {userApp} from "./APIs/UserAPI.js"
import {productApp} from "./APIs/ProductAPI.js"
import cookieParser from "cookie-parser"
const app = exp()
app.use(exp.json())
app.use(cookieParser())
// connect to DB

async function connectDB() {
    try {
        await connect("mongodb://localhost:27017/anuragdb")
        console.log("DB connection success");

        // start server
        app.listen(4000, ()=>console.log("server on port 4000..."))
    }catch(err){
        console.log("DB connection succes")
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


