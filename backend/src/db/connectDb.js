import mongoose from "mongoose";
import dotenv from 'dotenv';

const connectDb=async()=>{
    try{
       await mongoose.connect(process.env.MONGODB_URL);
       console.log("Connected to MongoDb");
    }catch(error){
        console.error("error connecting to MongoDb",error);
        process.exit(1); 
    }
}
export default connectDb