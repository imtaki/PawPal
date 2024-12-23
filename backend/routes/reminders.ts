import express from "express";
import { addReminder, getAllReminders, getReminderById, updateReminder, deleteReminder } from "../controllers/reminderController";

const router = express.Router();

router.post('/', addReminder);
router.get('/', getAllReminders );
router.get('/:id', getReminderById );
router.put('/:id', updateReminder );
router.delete('/:id', deleteReminder );

export default router;