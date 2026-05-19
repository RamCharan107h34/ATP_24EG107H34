// cretae min- express app
import exp from 'express'
import { UserModel } from '../models/UserModel.js'
import {compare, hash} from 'bcryptjs'
import jwt from 'jsonwebtoken'
import {verifyToken} from '../middlewares/verifyToken.js'
import {config} from 'dotenv'
export const userApp = exp.Router()
const {sign} = jwt

config()

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
    // get user by id
    userApp.get("/user",verifyToken,async(req,res)=>{
        // Raed object id from req params
        const emailOfUser = req.user?.email
        // find user by id
        const userobj = await UserModel.findOne({email:emailOfUser}).populate("cart.product")
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

    // user login
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
           const signedToken = sign({email:user.email},process.env.SECRET_KEY,{expiresIn:"1h"})
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
/*
   // add product to the cart
   userApp.put("/cart/poduct-id/:pid",verifyToken, async(req,res)=>{
    // get product id from url param
    let productId = req.params.pid
    // get current user email from req
    const emailOfUser = req.user?.email
    // add product  to cart
    let result = await UserModel.findOneAndUpdate({email: emailOfUser},{$push: {cart:{product:productId } } });
    // if user invalid
    if(!result){
        return res.status(404).json({message:"User not found"})
    }
    // send res
    res.status(200).json({message:"product added to cart"})
   })
*/

// add product to the cart
   userApp.put("/cart/poduct-id/:pid",verifyToken, async(req,res)=>{
    // get product id from url param
    let productId = req.params.pid
    // get current user email from req
    const emailOfUser = req.user?.email
    // add product  to cart
    // check wheather product is present in the user cart
    let inCart = await UserModel.findOne({"cart.product":productId})
    if(inCart){
        let result = await UserModel.findOneAndUpdate({email: emailOfUser, "cart.product":productId},{$inc:{"cart.$.count":1}})
        return res.status(200).json({message:"Item count updated"})
    }

    let result = await UserModel.findOneAndUpdate({email: emailOfUser},{$push: {cart:{product:productId } } });
    // if user invalid
    if(!result){
        return res.status(404).json({message:"User not found"})
    }
    // send res
     res.status(200).json({message:"product added to cart"})
   })