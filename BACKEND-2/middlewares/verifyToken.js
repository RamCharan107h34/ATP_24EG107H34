import jwt from "jsonwebtoken"
import {config} from 'dotenv'
const {verify} = jwt
config()
export function verifyToken(req,res,next){
    // verfy token logic
    // to access cookies part of the object we need cookie parchal middleware other wise req.cookeis undefine 
    const token = req.cookies?.token
    if(!token){
        return res.status(401).json({message:"plz login"})
    }

    try {
        const decodedToken = verify(token,process.env.SECRET_KEY)
        console.log(decodedToken)
        // call next
        req.user = decodedToken
        next()
    }catch(err){
        res.status(401).json({message:"session expired plz relogin"})
    }
}

// cross orgian vs same orgin
// croos
/* when the client and server appliction are running in different domain*/
/* same */
/* cookies are send along the request for same origen req automaticly
 for cross orgin it needs to be explicently */  