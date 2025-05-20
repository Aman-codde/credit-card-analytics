import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const mongoUri = process.env.MONGO_URI;

export const connectToMongoDB = async () => {
    try {
        await mongoose.connect(mongoUri)
        console.log(`Connected to mongodb successfully`)
    }
    catch(err){
        console.log(`Error connecting to mongodb : `,err)
        process.exit(1);
    }
}
