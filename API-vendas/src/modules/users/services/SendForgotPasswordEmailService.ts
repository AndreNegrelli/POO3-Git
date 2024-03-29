import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import UserRepository from "../typeorm/repositories/UserRepository";
import UserTokensRepository from "../typeorm/repositories/UserTokensRepository";
import EtherealMail from "@config/mail/EtherealMail";
import path = require("path");

interface IRequest{
    email: string;
}

export default class SendForgotEmailPassword{
    public async execute({email} : IRequest) : Promise<void>{
        const userRepository = getCustomRepository(UserRepository);
        const userTokensReposytory = getCustomRepository(UserTokensRepository);
        const forgotPasswordTemplate = path.resolve(__dirname, '..', 'views', 'forgot_password.hbs')
        const user = await userRepository.findByEmail(email);
        if(!user){
            throw new AppError('User does not exists.');
        }

        const {token} = await userTokensReposytory.generate(user.id);
        console.log(token);
        await EtherealMail.sendMail({
            to: {name: user.name, email: user.email},
            subject: '[API VENDAS] - Recuperação de Senha',
            templateData:{
                file: forgotPasswordTemplate,
                variables: {
                    name: user.name,
                    link: `https://localhost:3333/reset_password?token=${token}`
                }
            }
        })
    }
}