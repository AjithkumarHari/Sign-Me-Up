import {Request, Response} from "express"
import userHelper from "../helpers/userHelper"
import jwt from "../middlewares/jwt"
import { User } from "../models/user"


export default{
    login:(req : Request , res : Response)=>{
        res.send('login')
    },




    postSignUp  : async (req : Request , res : Response)=>{
        userHelper.signUp(req.body).then((response : User | { signUpError : string })=>{
            if(response && 'signUpError' in response){
                res.status(401).json(response.signUpError)
            }else if (response){
                const token = jwt.createUserToken(response)
                res.status(200).json([response,token])
            }
        }).catch(()=>{
            res.send('Failed')
        })
    },

    postLogIn : async (req : Request , res : Response)=>{
        userHelper.logIn(req.body).then((response : User | { loginError: string }) => {
            if (response && 'loginError' in response) {
                res.status(401).json(response.loginError);
            } else  {
                const token = jwt.createUserToken(response)
                res.status(200).json([response,token])
            }
        }).catch(() => {
            res.send('Failed');
        });
    } 

    
}