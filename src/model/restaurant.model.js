import { Schema, model, Types, Query } from "mongoose";

const RestaurantSchema =new Schema(
{
  name: {
    type: String,
    required: true,
    unique: true
  },
  
restaurantAddress: {
    type: String,
    required: true
  },
  contactInfo: {
    type: String,
    required: true
  },
  
  user: {
    type: Types.ObjectId,
    ref: "User",
    required: true
  }, 
  userId:String
},{
  timestamps: true
})

export default model("Restaurant", RestaurantSchema)