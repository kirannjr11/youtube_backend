// require('dotenv').config({path: './env'})

import dotenv from "dotenv"
import connectDB from "./db/index.js"


dotenv.config({
    path : './env'
})

connectDB()




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