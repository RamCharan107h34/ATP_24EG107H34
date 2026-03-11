// Create mini - expresses  app(Seperate Route)
import exp from 'express'
export const ProductApp = exp.Router()


// task: 
// test data for products
// create a product ({productID,name,brand,price})
let products = []
// create product API with below operation
    
    // Create new product
    ProductApp.post('/products',(req,res) => {
        //get product from user
        let product = req.body
        //push product into products
        products.push(product)
        //send res
        res.json({message:"product created"})
    })
    // Read all products
    ProductApp.get('/products',(req,res) => {
        // read all products & send req of client
        res.json({message:"all products",paylod: products})
    })
    // Read products by brand
    ProductApp.get('/products/:brand',(req,res) => {
        // get id of user from url parameter(args are passed to parameters)
        let brandOfUrl = req.params.brand
        // find index of user
        let product = products.find(productobj => productobj.brand === brandOfUrl)
        // if index is not found
        if(product === undefined){
            return res.json({message:"product not found"})
        }
        // res with user
        res.json({message:"product found",paylod: product})
    })
    // update products
    ProductApp.put('/products',(req,res) => {
        // get modified product of existing product in productss arry
        let modifiedproducts = req.body
        // get index of existing product in users array
        let index = products.findIndex(productobj => productobj.productID === modifiedproducts.productID)
        // if user not found 
        if(index === -1){
            return res.json({message:"product not found"})
        }
        // udate product
        products.splice(index,1,modifiedproducts)
        // send res
        res.json({message:"product updated"})
    })
    // delete product
    ProductApp.delete('/products/:id',(req,res) => {
        //get product id from url parameter
        let id = Number(req.params.id)
        //get product index
        let index = products.findIndex(productobj => productobj.productID === id)
        // if not found 
        if(index === -1){
            return res.json({message:"product not found"})
        }
        // if found delete 
        products.splice(index,1)
        // send res
        res.json({message:"product deleted"})
    })