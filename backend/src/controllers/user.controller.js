import User from "../models/user.models.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const registerUser=async(req,res)=>{
    try{
        const{name,username,email,phoneNo,password}=req.body;

        if(!name||!username||!email||!phoneNo||!password){
            return res.status(400).json({message:"All fields are required"})
        }

        const existingUser=await User.findOne({username})
        if(existingUser){
            return res.status(400).json({message:"User already exists"})
        }

        const hashedPassword=await bcrypt.hash(password,10)
        const nweUser=new User({
            name,
            username,
            email,
            phoneNo,
            password:hashedPassword,
        })
        await nweUser.save()

        const token=jwt.sign(
            {id:username.username,email:username.email},
            process.env.JWT_SECRET,
            {expiresIn:"7d"}
        )
        res.status(201).json({message:"User registered successfully",user:nweUser,token})
    }catch(error){
        console.error("Error registering user",error)
        res.status(500).json({message:"Internal Server error"})
    }
}