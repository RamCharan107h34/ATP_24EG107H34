import jwt from "jsonwebtoken"
const {verify} = jwt

export function verifyToken(req,res,next){
    // 
    // toaccess cookies part of the object we need cookie parchal middleware other wise req.cookeis undefine 
    const token = req.cookies?.token
    if(!token){
        return res.status(401).json({message:"plz login"})
    }

    try {
        const decodedToken = verify(token,"abcdef")
        console.log(decodedToken)
        // call next
        next()
    }catch(err){
        res.status(401).json({message:"session expired plz relogin"})
    }
}
