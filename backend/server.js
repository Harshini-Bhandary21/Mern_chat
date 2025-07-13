import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import colors from 'colors';
import connectDB from './config/db.js'
import { chats } from './data/data.js';

// .env file: if it is inside the backend folder the npm start should be run inside the backend folder for .env file to work
//mongodb+srv://harshinibhandary21:VsEQeNycVx8bTIA6@cluster0.1xj2arf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
// mongoDB was not geting connected because password was wrong, bad authentication error.

connectDB();
const app = express();

app.get('/',(req,res)=>{
    res.send("hello");
})

// app.get('/api/chat',(req,res)=>{
//     res.send(chats);
// })

// app.get('/api/chat/:id',(req,res)=>{
//     // console.log(req.params.id);
//     const singleChat = chats.find((c)=> c._id === req.params.id); // this is used to store the value of sing chat here .find() helps to find the id and the info realted with it
//     res.send(singleChat);
// })


const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server is running on PORT ${PORT}`.yellow.bold));