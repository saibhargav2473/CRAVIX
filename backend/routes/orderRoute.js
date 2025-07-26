import express from "express"
import authMiddleware from './../middleware/auth.js';
import { listOrders, placeOrder, updateStatus, userOrders, verifyOrder,placeCODOrder  } from "../controllers/orderController.js";

const orderRouter = express.Router();

orderRouter.post("/place",authMiddleware,placeOrder);
orderRouter.post("/verify", verifyOrder)
orderRouter.post("/userorders",authMiddleware,userOrders)
orderRouter.get('/list',listOrders)
orderRouter.post('/status', updateStatus)
orderRouter.post("/cod", authMiddleware, placeCODOrder);



export default orderRouter;