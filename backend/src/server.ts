import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import userRoute from './routers/userRoute';

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(cors({
    credentials : true,
    origin : ["http://localhost:4200"]
}))

app.use(cookieParser())


app.use('/user',userRoute)

mongoose.connect("mongodb://127.0.0.1:27017/SIGN_ME_UP")
.then(()=>{
    console.log("Connected to Database");
    app.listen(5000,()=>{
        console.log("App Listening on Port 5000");
    })
})