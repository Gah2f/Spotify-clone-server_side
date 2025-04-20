import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv/config';
import songRouter from './src/routes/songroutes.js';
import connectDB from './src/config/mongoDB.js';
import connectCloudinary from './src/config/cloudinary.js';
import albumRouter from './src/routes/albumroutes.js';
// App configruation 

const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();
// Middleware

app.use(express.json());
app.use(cors());

// initialize routes

app.use('/api/songs', songRouter);
app.use('/api/albums', albumRouter);

app.get('/', (req,res)=>{
    res.send('API Working')
})

app.listen(port, ()=>{console.log(`Server running  on ${port}`);})