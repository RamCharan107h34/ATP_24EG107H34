import {model, Schema} from 'mongoose'

// create product schema

const productSchema = new Schema({
    productId: {
        type: String,
        required:[true,"Product ID required"]
    },
    productName: {
        type: String,
        required:[true,"Product Name required"],
    },
    price: {
        type: Number,
        required:[true,"Product price required"],
        min: 10000,
        max: 50000,
    },
    brand: {
        type: String,
        required: [true,"Product brand required"]
    },
},
{
    versionKey: false,
    timestamps: true,
},
);

//Generate Product model

export const ProductModel = model("product",productSchema)