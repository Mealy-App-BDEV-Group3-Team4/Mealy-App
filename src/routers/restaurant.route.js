import express from 'express';
import RestaurantController from '../controllers/restaurant.controller.js'
import { tryCatchHandler } from '../utils/tryCatch.handler.js'
import {userAuthMiddleWare} from "../middleware/auth.js"

const router = new express.Router()

router.post("/create", userAuthMiddleWare, tryCatchHandler( RestaurantController.createRestaurant) )








export { router }