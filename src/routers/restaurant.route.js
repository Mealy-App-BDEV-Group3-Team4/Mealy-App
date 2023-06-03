import express from 'express';
import RestaurantController from '../controllers/restaurant.controller.js'
import { tryCatchHandler } from '../utils/tryCatch.handler.js'
import {userAuthMiddleWare} from "../middleware/auth.js"
import {restaurantAuthMiddleWare} from "../middleware/auth.js"
import {searchByKeywordMiddleware} from "../middleware/auth.js"

const router = new express.Router()

router.post("/create", userAuthMiddleWare, tryCatchHandler( RestaurantController.createRestaurant) )
router.get("/:category", restaurantAuthMiddleWare, tryCatchHandler( RestaurantController.searchByCategory) )
router.get("/all-categories", userAuthMiddleWare, tryCatchHandler( RestaurantController.searchAllcategories))
router.get("/search", searchByKeywordMiddleware, tryCatchHandler( RestaurantController.searchByKeyword) )


export { router }