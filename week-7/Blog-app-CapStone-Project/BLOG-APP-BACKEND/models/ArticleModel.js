import {Schema,Types, model} from 'mongoose'

const commentSchema = new Schema({
    user: {
        type: Types.ObjectId,
        ref: 'user',
        required: [true, "User id is requred"]
    },
    comment :{
        type: String,
        required:[true,"Enter comment"]
    }
},{
    versionKey: false,
    timestamps: true,
    strict: 'throw'
});

const articleSchema = new Schema({
    author: {
        type: Types.ObjectId,
        ref: "user",
        required: [true,"Author ID is required"]
    },
    title:{
        type: String,
        required: [true,"title is required"],
    },
    category: {
        type: String,
        required: [true, "Categois is required"]
    },
    content: {
        type: String,
        required: [true, "Content requred"]
    },
    comments:[{type: commentSchema ,default: [] }],
    isArticleActive:{
        type: Boolean,
        default: true
    }
},{
    versionKey: false,
    timestamps: true,
    strict: 'throw'
})

export const ArticleModel = model("article",articleSchema)

