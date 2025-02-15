// my server 
import express, { Express, Request, Response } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import petsRouter from "./routes/pets";
import authRoutes from "./routes/authRoutes"
import remindersRouter from "./routes/reminders"

dotenv.config();


// express
const app: Express = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port: string | number = process.env.PORT || 3001;

// db
mongoose
.connect(process.env.MONGO_URL as string)
.then(() => console.log('Connected to MongoDB server'))
.catch((err) => console.log(err + "DB not connected"));

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});


const corsOptions = {
    origin: [
        'https://pawpal-pearl.vercel.app', 
        'http://localhost:3000',
        'https://pawpal-bhe3.onrender.com'
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
};

app.use(cors(corsOptions));
app.use('/api/pets', petsRouter)
app.use('/api/auth', authRoutes)
app.use('/api/reminders', remindersRouter)

app.listen(port, () => {
    console.log([`[server]: Server is running at http://localhost:${port}`]);
})