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
app.use(cors())
const port: string | number = process.env.PORT || 3001;

// db
mongoose
.connect(process.env.MONGO_URL as string)
.then(() => console.log('Connected to MongoDB server'))
.catch((err) => console.log(err + "DB not connected"));

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});


app.use('/api/pets', petsRouter)
app.use('/api/auth', authRoutes)
app.use('/api/reminders', remindersRouter)

app.listen(port, () => {
    console.log([`[server]: Server is running at http://localhost:${port}`]);
})