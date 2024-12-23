import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User, { IUser } from "../models/User";

const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret";

export const registerUser = async (req: Request, res: Response) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ message: "Username, email and password are required" });
    }

    try {
        const existingUser = await User.findOne({ 
            $or: [
                { username },
                { email }
            ]
        });
        
        if (existingUser) {
            return res.status(409).json({ message: "Username or email already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ 
            username,
            email, 
            password: hashedPassword 
        });
        await newUser.save();

        res.status(201).json({ message: "User registered successfully" });
    } catch (error: any) {
        console.error("Error during registration:", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const loginUser = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: "Invalid username or password" });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid username or password" });
        }

        const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1h" });
        res.status(200).json({ message: "Login successful", token });
    } catch (error: any) {
        console.error("Error during login:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};