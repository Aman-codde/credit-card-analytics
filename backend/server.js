import express from 'express';
import dotenv from 'dotenv';
import { connectToMongoDB } from './config/db.js';
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const PORT = process.env.PORT;
const app = express();

app.use(express.json());

app.use('/api/auth',authRoutes);

//connect to mongodb
connectToMongoDB();

app.get('/', (req,res) => {
    res.send('Hello World!')
})

app.listen(PORT, ()=> {
    console.log(`Server is listening to http://localhost:${PORT}`);
})