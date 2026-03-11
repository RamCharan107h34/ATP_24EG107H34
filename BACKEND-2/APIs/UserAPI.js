// cretae min- express app
import exp from 'express'
import { UserModel } from '../models/UserModel.js'
import {compare, hash} from 'bcryptjs'
import jwt from 'jsonwebtoken'
import {verifyToken} from '../middlewares/verifyToken.js'
export const userApp = exp.Router()
const {sign} = jwt
// Define User Rest API Router()
    // Create new User

    userApp.post("/users",verifyToken, async(req,res)=>{
        //get new user obj from req
        const newUser = req.body
        const hashPassword = await hash(newUser.password,12)

        newUser.password = hashPassword;
        // Create new user document 
        const newUserDocument = new UserModel(newUser)
        // save 
        const result = await newUserDocument.save()
        console.log("result :",result)
        // send res
        res.status(201).json({message: "User created"})
        
    });
    // get all (req is protected route)
    userApp.get("/users",verifyToken, async(req,res)=>{
        // read all users from db
        let userList = await UserModel.find()
        //send res
        res.status(200).json({message:"users",payload: userList})
    })

    userApp.get("/users/:id",verifyToken,async(req,res)=>{
        // Raed object id from req params
        const uid = req.params.id
        // find user by id
        const userobj = await UserModel.findById(uid)
        if(!userobj){
            return res.status(404).json({message:"User not found"})
        }
        // send res
        res.status(200).json({message:"user",payload:userobj})
    })

    // use findOne method to use when searching with non id 
    // use findbyid method when searching with id 

    userApp.put("/users/:id",verifyToken, async(req,res)=>{
        // get modifed user from req
        const modifiedUser = req.body;
        const uid = req.params.id;
        // find user by id & update
        const updatedUser = await UserModel.findByIdAndUpdate(
            uid,
            {$set: {...modifiedUser}},
            {new: true,runValidators: true}
        );
        // send res 
        res.status(200).json({message:"User modifed",payload:updatedUser})
    })

    userApp.delete("/users/:id",verifyToken,async(req,res)=>{
        // get user id req params
        let uid = req.params.id
        // find user by id & delete
        let deletedUser = await UserModel.findByIdAndDelete(uid)
        if(!deletedUser){
            return res.status(404).json({message:"user not found"})
        }
        // send res
        res.status(200).json({message:"deleted user",payload:deletedUser});
    })

    // user logic
    userApp.post("/auth",async (req,res) => {
        // get user crud from 
        const {email,password} = req.body
        // verify email
        let user = await UserModel.findOne({email:email})
        // if not found
        if(user === null){
            return res.status(400).json({message:"Invalid Email"})
        }
        // compare password
        let result = await compare(password,user.password)
        // if password not matched
        if(result === false){
            return res.status(400).json({message:"Invalid password"})
        }

        //if passwords are method
           //create token (jsonwebtoken -jwt --jaat)
           const signedToken = sign({email:user.email},"abcdef",{expiresIn: 10})
           // send token in res
           //store token as httpOnly cookie
           res.cookie("token",signedToken,{
            httpOnly:true,
            sameSite:"lax",
            secure:false
           })
           // send res
           res.status(200).json({message:"login success",payload:user})
   });

// app.use()