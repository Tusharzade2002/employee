import express from 'express'
import dotenv from 'dotenv';
import cors from 'cors';

const app =express();
dotenv.config();
app.use(cors());
app.use(express.json());


const PORT=8001;


 app.listen(PORT,()=>{
    console.log(`server is running on  port: ${PORT}`);
    
 })