import Joi from "joi";

export const createRestaurantValidator = Joi.object({
  customer: Joi.objectId().required(),
  customerId: Joi.objectId().required(),
  name: Joi.string().required(),
  category: Joi.string().required(),
  restaurantAddress: Joi.string().required(),
  contactInfo: Joi.string().required()
}).strict()


export const getOneRestaurantValidator = Joi.object({
  category: Joi.string().required(),
  
}).strict()


// export const restaurantKeywordValidator = Joi.object({
//  name: Joi.string().required(),
//  restaurantAddress: Joi.string().required(),
//  contactInfo: Joi.string().required()

// }).strict()