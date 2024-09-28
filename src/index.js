// require('dotenv').config({path: './env'})

import dotenv from "dotenv"
import connectDB from "./db/index.js"
import express from "express";

dotenv.config({
    path : './env'
})

const app = express();

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running in the port : ${process.env.PORT} `)
    })
})
.catch((err) => {
    console.log("MOGO db connection failed!! ", err)
})




/*
import express from "express"
const app = express()

const connectDB =   async() => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB__NAME}`)
        console.log(`\n MongoDB connected DB host : ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MonogoDB connection error", error);
        process.exit(1)
    }
}

export default connectDB; */