import express from 'express';
import dotenv from 'dotenv';
import { connectToMongoDB } from './config/db.js';
import cors from "cors";

dotenv.config();

const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173',  // alow frontend 
    //credentials: true, // allow http-cookies/auth headers
}))

//connect to mongodb
connectToMongoDB();

app.get('/', (req,res) => {
    res.send('Hello World!')
})

app.listen(PORT, ()=> {
    console.log(`Server is listening to http://localhost:${PORT}`);
})