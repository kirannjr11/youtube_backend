import mongoose from "mongoose";
import { DB__NAME } from "../constants.js";

const connectDB = async () => {
    try {
        // Check if the URI is valid and use DB__NAME if needed
        const uri = `${process.env.MONGODB_URI}/${DB__NAME}`; // Only append DB__NAME if necessary
        const connectionInstance = await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        // Log successful connection
        console.log(`\n MongoDB connected !! DB Host: ${connectionInstance.connection.host}`);
        console.log(`Database name: ${connectionInstance.connection.name}`);
    } catch (error) {
        console.log("MongoDB connection error:", error);
        process.exit(1); // Stop the process on connection failure
    }
};

export default connectDB;
