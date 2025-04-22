const express  = require("express")
const cartRouter = express.Router()

const {addToCart,removeFromCart,getCart} = require("../controllers/cartcontroll");
const {authMiddleware} = require("../middleware/auth")

cartRouter.post("/add",authMiddleware,addToCart);
cartRouter.post("/remove",authMiddleware,removeFromCart);
cartRouter.post("/get",authMiddleware,getCart)



module.exports={cartRouter}

