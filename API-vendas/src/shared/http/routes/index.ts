import {Router} from "express"

const routes = Router()

routes.get('/', (request, response) => {
    return response.json({message: 'Opa dev!'})
})

export default routes