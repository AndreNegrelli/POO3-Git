import fs from "fs"
import uploadConfig from "@config/upload"
import { getCustomRepository } from "typeorm"
import UserRepository from "../typeorm/repositories/UserRepository"
import AppError from "@shared/errors/AppError"
import User from "../typeorm/entities/User"
import path from "path"


interface IRequest{
    user_id: string
    avatarFileName: string
}

export default class UpdateUserAvatarService{
    public async execute({user_id, avatarFileName} : IRequest): Promise<User>{
        const userRepository = getCustomRepository(UserRepository)
        const user = await userRepository.findById(user_id)
        if(!user){
            throw new AppError('User not Found')
        }
        if(user.avatar){
            const userAvatarFilePath = path.join(uploadConfig.directory, user.avatar)
            const userAvatarExists = await fs.promises.stat(userAvatarFilePath)
            if(userAvatarExists){
                //remove arquivo do servidor
                await fs.promises.unlink(userAvatarFilePath)
            }
        }
        user.avatar = avatarFileName
        await userRepository.save(user)
        return user
    }
}