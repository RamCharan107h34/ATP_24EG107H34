import exp from "express"
import {UserModel} from "../models/UserModel.js"
import {ArticleModel} from "../models/ArticleModel.js"
import {verifyToken} from "../middlewares/verifyToken.js"

export const authorApp = exp.Router()

// write artical (protected route)
    authorApp.post("/article",verifyToken('AUTHOR'),async(req,res)=>{
        // get cred from req
        const authorObj = req.body
        // check author id 
        let author = await UserModel.findById(authorObj.author)
        // if not found
        if(!author){
            return res.status(404).json({message:"id not found"})
        }
        // check author
        if(author.email !== req.user.email){
            return res.status(403).json({message:"You are unauthorized"})
        }
        // check role
        if(author.role !== "AUTHOR"){
            return res.status(403).json({message:"Only author can publish"})
        }
        // create artical doc
        const newArticlDocument = new ArticleModel(authorObj)
        // save article doc
        const result = await newArticlDocument.save()
        // send res
        res.status(201).json({message:"Article Created",payload:result})
    })

// Read own articles

authorApp.get("/articles",verifyToken("AUTHOR"),async(req,res)=>{
    // get user email from 
    let authorEmail = req.user?.email
    const user = await UserModel.findOne({email:authorEmail})
    const articals = await ArticleModel.find({author:user._id})
    res.status(200).json({payload:articals})
})

// Edit artical
authorApp.put("/article",verifyToken("AUTHOR"),async(req,res)=>{

    const authorIdToken = req.user?.id;

    const {articleId, title, category,content} = req.body

    let modifedarticle = await ArticleModel.findOneAndUpdate(
        {_id: articleId,author:authorIdToken},
        {$set: {title,category,content}},
        {new: true}
    )

    console.log(modifedarticle)

    if(!modifedarticle){
        return res.status(403).json({message:"Not authorized to edit article"})
    }

    res.status(200).json({message:"article modified",payload:modifedarticle})
})

// delete article by article id (soft delete)

authorApp.patch("/articles",verifyToken("AUTHOR"),async(req,res)=>{
    // get author id from req
    const authorIdOfToken = req.user?.id;
    // get body of the req
    const {articleId, isArticleActive} = req.body
    // find article by article id and author
    const articleDB = await ArticleModel.findOne({_id: articleId,author: authorIdOfToken})
    // if article is already in the given state
    if(isArticleActive === articleDB.isArticleActive){
        return res.status(200).json({message:"article is already in the same state"})
    }
    // change it in the doc
    articleDB.isArticleActive = isArticleActive
    // save doc
    articleDB.save()
    // send res
    res.status(200).json({message:"article",payload:articleDB})
})