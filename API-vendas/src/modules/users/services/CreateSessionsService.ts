import AppError from "@shared/errors/AppError"
import { compare } from "bcryptjs"
import { sign } from "jsonwebtoken"
import { getCustomRepository } from "typeorm"
import User from "../typeorm/entities/User"
import UserRepository from "../typeorm/repositories/UserRepository"
import authConfig from "@config/auth"

interface Irequest{
    email: string
    password: string
}

interface Iresponse{
    user: User
    token: string
}

export default class CreateSessionsService{
    public async execute ({email, password}: Irequest): Promise <Iresponse>{
        const userRepository = getCustomRepository(UserRepository)
        const user = await userRepository.findByEmail(email)
        if(!user){
            throw new AppError('Incorrect email/password combination', 401)
        }
        const passwordConfirmed = await compare(password, user.password)
        if(!passwordConfirmed){
            throw new AppError('Incorrect email/password combination', 401)
        }
        console.log('teste')
        const token = sign({}, authConfig.jwt.secret,{
            subject: user.id,
            expiresIn: authConfig.jwt.expiresIn
        })
        return {user, token}
    }
}