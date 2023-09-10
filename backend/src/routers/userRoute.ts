import { Router , Request, Response } from "express";
import userController from "../controllers/userController"
const router = Router();

router.get('/',(req : Request, res : Response)=>{
    res.send('hello world')
})
router.post('/login',userController.postLogIn)

router.post('/signup',userController.postSignUp)

export default router;