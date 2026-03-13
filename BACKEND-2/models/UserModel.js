import {model, Schema, Types} from 'mongoose'
// create cart schema {product, count}

const cartSchema = new Schema({
    product:{
        type: Types.ObjectId,
        ref: "product" // name of the product model
    },
    count: {
        type: Number,
        default: 1
    }
})

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
    cart:[cartSchema]
},
{
    versionKey: false,
    timestamps: true,
},
);

// Generate UserModel

export const UserModel = model("user",userSchema)
