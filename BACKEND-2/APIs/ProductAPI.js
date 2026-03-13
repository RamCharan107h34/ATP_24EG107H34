import exp from 'express'
import {ProductModel} from '../models/ProductModel.js'
import {hash} from 'bcryptjs'
import {verifyToken} from '../middlewares/verifyToken.js'
export const productApp = exp.Router()

// Define product Rest API Router()
    // Create new product 
    productApp.post("/products",verifyToken,async (req,res)=>{
        // get new product 
        const newProduct = req.body
        // create new product docment 
        const newProductDoc = new ProductModel(newProduct)
        // save 
        const result = await newProductDoc.save()
        console.log(result)
        // send res
        res.status(201).json({message:"Product Created"})
    })
    // Get all products
    productApp.get("/products",verifyToken, async (req,res)=>{
        // read all products from db
        let productList = await ProductModel.find()
        // send res
        res.status(200).json({message:"Product List",payload:productList})
    })

    // get products by product id
    productApp.get("/products/:id",verifyToken, async (req,res)=>{
        // read object id from req params
        const prodid = req.params.id
        // find product by product id
        const prodObj = await ProductModel.findOne({ productId: prodid })
        // if not found 
        if(!prodObj){
            return res.status(404).json({message:"Product not found"})
        }
        // send res
        res.status(200).json({message:"Product",payload:prodObj})
    })

    // update product details
    productApp.put("/products/:id",verifyToken, async (req,res) =>{
        // get modifed and id from req params
        const modifedProd = req.body
        const prodid = req.params.id
        // find product by id & update it
        const updatedProd = await ProductModel.findOneAndUpdate(
            { productId: prodid },
            {$set: {...modifedProd}},
            {new: true,runValidators: true}
        )
        if(!updatedProd){
            return res.status(404).json({message:"product not found"})
        }
        // send res 
        res.status(200).json({message:"Product modifed",payload:updatedProd})
    })

    // delete product 
    productApp.delete("/products/:id",verifyToken,async (req,res)=>{
        // get product id req params
        let prodid = req.params.id
        // find product by id & delete
        let deletedProd = await ProductModel.findOneAndDelete({productId: prodid})
        if(!deletedProd){
            return res.status(404).json({message:"product not found"})
        }
        // send res
        res.status(200).json({message:"deleted product",payload:deletedProd});
    })
