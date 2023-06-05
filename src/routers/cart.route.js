import {Router} from "express"
import ItemController from "../controllers/item.controller.js"
import { tryCatchHandler } from "../utils/tryCatch.handler.js"
import {restaurantAuthMiddleWare} from "../middleware/auth.js"
import {userAuthMiddleWare} from "../middleware/auth.js"

const router = Router()

router.get("/cart", userAuthMiddleWare, tryCatchHandler( ItemController.addItemToCart))

router.get("/cart", userAuthMiddleWare, tryCatchHandler( ItemController.addItemToCart))


export {router}