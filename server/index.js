import express from 'express'
import dotenv from 'dotenv';
import cors from 'cors';

const app =express();
dotenv.config();
app.use(cors());
app.use(express.json());

import { error } from './Controller/other.js';
import { health } from './Controller/health.js';
import {GetEmployee ,PostEmployee,DeleteEmployee} from './Controller/Employee.js'

const PORT=8001;
 app.get("/health",health);
 app.get("/employes",GetEmployee);
 app.post("/employes",PostEmployee)
 app.delete("/employes/:EmpId",DeleteEmployee)

 app.get("*",error)
 app.listen(PORT,()=>{
    console.log(`server is running on  port: ${PORT}`);
    
 })