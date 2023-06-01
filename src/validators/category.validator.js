import Joi from "joi"
import JoiMongoId from "joi-objectid"

Joi.objectId = JoiMongoId(Joi)

export const createCategoryValidator = Joi.object({
  customer: Joi.objectId().required(),
  customerId: Joi.objectId().required(),
  name: Joi.string().required(),
  startDate: Joi.string().required(),
  endDate: Joi.string().required(),
}).strict()



export const updateCategoryValidator = Joi.object({
  customer: Joi.objectId().required(),
  customerId: Joi.objectId().required(),
  title: Joi.string().optional(),
  startDate: Joi.string().optional(),
  endDate: Joi.string().optional(),
}).strict()
