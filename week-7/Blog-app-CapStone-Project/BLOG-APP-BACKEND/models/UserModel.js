import {Schema, model} from 'mongoose'


// create schema of user
const userSchema = new Schema({
    firstName: {
        type: String,
        required: [true, " First Name is required"]
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        required: [true,"Email is required"],
        unique: [true, "Email alread exists"]
    },
    password: {
        type: String,
        required: [true,"Password required"]
    },
    role: {
        type:String,
        enum: ["USER","AUTHOR","ADMIN"],
        required: [true,"Invaild role"]
    },
    profileImageUrl:{
        type: String
    },
    isUserActive:{
        type: Boolean,
        default: true
    }
},{
    timestamps:true,
    versionKey: false,
    strict: "throw"
})

// create model of user

export const UserModel = model("user",userSchema)