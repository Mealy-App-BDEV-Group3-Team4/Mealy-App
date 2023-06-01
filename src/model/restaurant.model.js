import { Schema, model, Types, Query } from "mongoose";

const RestaurantSchema =new Schema(
{
  name: {
    type: String,
    required: true
  },
  
restaurantAddress: {
    type: String,
    required: true
  },
  // contactInfo: {
  //   type: Number,
  //   required: true
  // },
  
  customer: {
    type: Types.ObjectId,
    ref: "User",
    required: true
  }, 
  customerId:String
},{
  timestamps: true
})

export default model("Restaurant", RestaurantSchema)