//1
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import connectDb from './src/db/connectDb.js';
import userRoutes from './src/routes/user.routes.js'; 


2
const app=express();

//3

app.use(cors());


//4 get and listen
const port=process.env.PORT
app.get('/',(req,res)=>{
    res.send("Here's My Profiler App");
})

app.use(express.json()); // userRoutes

app.use('/api/user',userRoutes); //userRoutes

app.listen(port,()=>{
    connectDb();
    console.log("Server is running at port",port);
})

// dotenv.config();
// const app = express();

// app.use(cors());
// app.use(express.json());
// app.use('/api/user', userRoutes);

// const port = process.env.PORT;

// const startServer = async () => {
//     try {
//         await connectDb();
//         app.listen(port, () => {
//             console.log("Server is running at port", port);
//         });
//     } catch (error) {
//         console.error("Failed to start server:", error);
//         process.exit(1);
//     }
// };

// startServer();