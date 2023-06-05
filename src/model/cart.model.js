import { Schema, model, Types } from "mongoose"


const CartSchema = new Schema({
    customer: {
      type: Types.ObjectId,
      ref: "User",
      required: true,
    },
    
   cart: {
      type: [{
        order: {
          type: Types.ObjectId,
          ref: "Item",
        },
        dateOrdered: {
            type: String,
            default: new Date()
          },
      }],
      default: undefined
  }
   
// [{ text: String, date: {type:String, default: new Date()} }]
 
}) 

export default model('Cart', CartSchema)