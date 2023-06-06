import express from 'express';
import RestaurantController from '../controllers/restaurant.controller.js'
import { tryCatchHandler } from '../utils/tryCatch.handler.js'
import {userAuthMiddleWare} from "../middleware/auth.js"
import {restaurantAuthMiddleWare} from "../middleware/auth.js"
import {searchByKeywordMiddleware} from "../middleware/auth.js"

const router = new express.Router()

router.post("/create", userAuthMiddleWare, tryCatchHandler( RestaurantController.createRestaurant) )

router.get("/all-restaurants", userAuthMiddleWare, tryCatchHandler( RestaurantController.searchAllrestaurants))

router.get("/keyword", userAuthMiddleWare, tryCatchHandler( RestaurantController.searchByKeyword) )

router.get("/:category", searchByKeywordMiddleware, tryCatchHandler( RestaurantController.searchBycategory) )

router.put("/update", userAuthMiddleWare, tryCatchHandler( RestaurantController.updateOneRestaurant))

router.delete("/delete", userAuthMiddleWare, tryCatchHandler( RestaurantController.deleteOneRestaurant) )




export { router }