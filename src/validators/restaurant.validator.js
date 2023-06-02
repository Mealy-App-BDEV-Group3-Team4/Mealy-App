import Joi from "joi";

export const createRestaurantValidator = Joi.object({
  customer: Joi.objectId().required(),
  customerId: Joi.objectId().required(),
  name: Joi.string().required(),
  restaurantAddress: Joi.string().required(),
  contactInfo: Joi.string().required()
}).strict()

export const updateRestaurantValidator = Joi.object({
  customer: Joi.objectId().required(),
  customerId: Joi.objectId().required(),
 status: Joi.string().valid('pending', 'in-progress', 'completed').required(),
 name: Joi.string().required(),

}).strict()

export const updateCategoryValidator = Joi.object({
  item: Joi.objectId().required(),
  itemId: Joi.objectId().required(),
 name: Joi.string().optional(),
 menu: Joi.string().optional(),
}).strict()