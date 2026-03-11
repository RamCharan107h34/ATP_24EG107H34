import {model, Schema} from 'mongoose'

// create User Schema
const userSchema = new Schema({
    username:{
        type: String,
        required: [true,"User is required"],
        minLength: [4, "Min length of username is 4 chars"],
        maxLength: [20, "Username size excced 20 chars"],
    },
    password: {
        type: String,
        required:[true,"Password required"],
    },
    email: {
        type: String,
        required: [true,"Email required"],
        unique:[true,"Email already existed"], // it is not a valdiator
    },
    age: {
        type: Number,
    },
},
{
    versionKey: false,
    timestamps: true,
},
);

// Generate UserModel

export const UserModel = model("user",userSchema)
