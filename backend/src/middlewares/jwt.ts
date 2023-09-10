import jwt from 'jsonwebtoken'
import { User } from '../models/user'

const secret = "7dG9pK2sR5yW8vT1zN0xM3lA"

export default {
    createUserToken : (user: User) => {
        const payload : User ={
            _id: user._id,
            name : user.name,
            email : user.email,
            password : user.password,
            image : user.image
        }
        const options = { expiresIn: '1hr' }
        return jwt.sign(payload,secret,options)
    }
}