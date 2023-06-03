import {createRestaurantValidator, updateRestaurantValidator, getOneRestaurantValidator} from "../validators/restaurant.validator.js"
import Restaurant from "../model/restaurant.model.js"
import User from "../model/user.model.js"
import { BadUserRequestError, NotFoundError } from "../error/error.js"
import { mongoIdValidator } from "../validators/mongoId.validator.js"

export default class RestaurantController {
  static async createRestaurant(req, res,){
      const {error } = createRestaurantValidator.validate(req.body)
      if(error) throw error
      const newRestaurant = await Restaurant.create({...req.body, user: req.user._id , userId: req.user._id })
      res.status(201).json({
      message: "Restaurant created successfully",
      status: "Success",
      data:{
        restaurant: newRestaurant
      }
    })
  }

  // static async updateOneRestaurant(req, res){
  //   const { id } = req.query
  //   const { error } = mongoIdValidator.validate(req.query)
  //   if( error ) throw new BadUserRequestError("Please pass in a valid mongoId")

  //   const updateValidatorResponse = await updateRestaurantValidator.validate(req.body)
  //   const updateRestaurantError = updateValidatorResponse.error
  //   if(updateRestaurantError) throw updateRestaurantError

  //   const restaurant = await Restaurant.findById(id)
  //   if(!restaurant) throw new NotFoundError(`The Restaurant with this id: ${id}, does not exist`)

  //   const updatedRestaurant = await Restaurant.findByIdAndUpdate(id, req.body, {new: true})
  //   return res.status(200).json({
  //     message: "Restaurant updated successfully",
  //     status: "Success",
  //     data:{
  //       restaurant: updatedRestaurant
  //     }
  //   })
  // }



  static async getOneRestaurant(req, res) {
    const { category} = req.params
    const { error } = getOneRestaurantValidator.validate(req.params)
    if( error ) throw new BadUserRequestError("Please pass in a valid mongoId")

    const restaurant = await Restaurant.findOne(req.params.category)
    if(!restaurant) throw new NotFoundError(`The Restaurant with this id: ${category}, does not exist`)

    return res.status(200).json({
      message: "Restaurantfound successfully",
      status: "Success",
      data: {
        restaurant: restaurant
      }
    })
  }


  static async deleteOneRestaurant(req, res) {
    const { id } = req.query
    const { error } = mongoIdValidator.validate(req.query)
    if( error ) throw new BadUserRequestError("Please pass in a valid mongoId")

    const restaurant = await Restaurant.findById(id)
    if(!restaurant) throw new NotFoundError(`The Restaurant with this id: ${id}, does not exist`)

    await Restaurant.findByIdAndUpdate(id, {
      isDeleted: true
    })

    return res.status(200).json({
      message: "Restaurant deleted successfully",
      status: "Success",
    })
  }


  static async findAll(req, res) {
const id = req.user._id
    const { error } = mongoIdValidator.validate(req.query)
    if( error ) throw new BadUserRequestError("Please pass in a valid mongoId")

    const user = await User.findById(id)
    if(!user) throw new NotFoundError(`The user with this id: ${id}, does not exist`)

    const restaurants =  await Restaurant.find({ customerId: id }).populate("customer")

    return res.status(200).json({
      message: restaurants.length < 1 ? "No Restaurants found" : "Restaurants found successfully",
      status: "Success",
      data: {
        restaurants: restaurants
      }
    })
  }

}