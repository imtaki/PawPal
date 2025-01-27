import express from "express";
import { registerUser, loginUser, getUserProfile } from "../controllers/userController";
import { authenticateToken } from "../middleware/authMiddleware";

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get("/profile", authenticateToken, getUserProfile);

export default router;