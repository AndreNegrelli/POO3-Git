import auth from "@config/auth";
import AppError from "@shared/errors/AppError";
import {verify} from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import { decode } from "punycode";

interface TokenPayload{
    iat: number
    exp: number
    sub: string

}

export default function isAuthenticated(request: Request, response: Response, next: NextFunction): void{

    const authHeader = request.headers.authorization
    if(!authHeader){
        throw new AppError('Jwt Token is missing')
    }
    const [type,token] = authHeader.split(' ')
    try{
        const decodeToken = verify(token, auth.jwt.secret)
        const {sub} = decodeToken as TokenPayload
        request.user = {id : sub}
        return next()
    }catch{
        throw new AppError('Invalid JWT Token')
    }

}