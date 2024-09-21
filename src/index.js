import mongoose from "mogoose";
import { DB__NAME } from "./constants";

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

export default connectDB;