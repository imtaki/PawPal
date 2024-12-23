import express from "express";
import { registerUser, loginUser } from "../controllers/userController";
import { authenticateToken } from "../middleware/authMiddleware";

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);

router.get("/profile", authenticateToken, (req, res) => {
    res.status(200).json({ message: "Welcome to your profile!" });
});
export default router;