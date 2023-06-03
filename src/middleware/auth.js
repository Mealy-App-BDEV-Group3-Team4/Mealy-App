import { UnAuthorizedError} from "../error/error.js"
import {verifyToken} from "../utils/jwt.js"

export function userAuthMiddleWare(req, res, next){
  const token = req.headers?.authorization?.split(" ")[1];
  if(!token) throw new UnAuthorizedError("You must provide an authorization token.")
  try {
    const payload = verifyToken(token)
    req.user = payload
    next()
  }catch (err){
    throw new UnAuthorizedError("Access denied, invalid token.")
  }
} 


export function restaurantAuthMiddleWare(req, res, next) {
  const { category } = req.query;

  if (!category) {
    return res.status(400).json({
      success: false,
      error: "Missing category parameter in req.query"
    });
  }

  next();
}


export function searchByKeywordMiddleware(req, res, next) {
  const { keyword } = req.query;

  if (keyword) {
    req.searchFilter = {
      $or: [
        { name: { $regex: keyword, $options: "i" } },
        { description: { $regex: keyword, $options: "i" } },
        { category: { $regex: keyword, $options: "i" } },
      ],
    };
  }

  next();
}
