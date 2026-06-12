//1
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDb from './src/db/connectDb.js';

//2
const app=express();

//3

app.use(cors());
dotenv.config();

//4 get and listen
const port=process.env.PORT
app.get('/',(req,res)=>{
    res.sendStatus("Here's My Profiler App");
})

app.listen(port,()=>{
    connectDb();
    console.log("Server is running at port",port);
})

