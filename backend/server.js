import express, { json } from 'express';
import dotenv from 'dotenv';
dotenv.config();
import colors from 'colors';
import connectDB from './config/db.js'
import { chats } from './data/data.js';
import userRoutes from './routes/userRoutes.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
// .env file: if it is inside the backend folder the npm start should be run inside the backend folder for .env file to work
//mongodb+srv://harshinibhandary21:VsEQeNycVx8bTIA6@cluster0.1xj2arf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
// mongoDB was not geting connected because password was wrong, bad authentication error.

connectDB();
const app = express();

app.use(express.json());  // to accept json data.


app.get('/',(req,res)=>{
    res.send("hello");
})

app.use('/api/user',userRoutes);


app.use(notFound);
app.use(errorHandler);

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