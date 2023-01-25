import { celebrate, Segments } from "celebrate";
import { Router } from "express";
import Joi from "joi";
import UserController from "../controllers/UserController";

const userRouter = Router()
const usersController = new UserController()

userRouter.get('/', usersController.index)
userRouter.post('/', celebrate({
    [Segments.BODY] : {
        name : Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().required()
    }
}), usersController.create)
 export default userRouter