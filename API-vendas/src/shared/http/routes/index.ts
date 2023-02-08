
import productRouter from "@modules/products/routes/products.routes"
import passwordRouter from "@modules/users/routes/password.router"
import sessionRouter from "@modules/users/routes/sessions.routers"
import userRouter from "@modules/users/routes/users.routes"
import {Router} from "express"

const routes = Router()

routes.use('/products', productRouter)
routes.use('/users', userRouter)
routes.use('/sessions', sessionRouter)
routes.use('/password', passwordRouter)

export default routes