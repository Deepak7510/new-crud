import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import connectDB from './Config/database.js';
import studentRouter from './Routes/student-route.js';
dotenv.config();

const PORT=process.env.PORT || 3000

const app=express();


app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors({
    origin: process.env.FROUNTED_URL, // 🚀 Dono ports allow karein
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true, // Agar cookies send karni ho
}))


app.use('/api/student',studentRouter);



connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server is running on ${PORT}`);
    })
})





