import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

export const conectDB =async ()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('conectado a mongodb')
    } catch (error) {
        console.log('Error al conectar a MongoDB:', error.message);
        
        
    }
} ;