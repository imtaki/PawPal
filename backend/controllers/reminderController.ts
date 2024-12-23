import { Request, Response } from "express";
import Reminder from "../models/Reminders";

// Create a new Reminder - C
export const addReminder = async (req: Request, res: Response) => {
    const { title, petName, customDate, description} = req.body;
    const createReminderPromise = new Promise(async (resolve, reject) => {
      try {
        const newReminder = new Reminder({ title, petName, customDate: new Date(customDate), description });
        await newReminder.save();
        resolve(newReminder);
      } catch (error) {
        reject(error);
      }
    });
    try {
      const reminder = await createReminderPromise;
      res.status(201).json(reminder);
    } catch (error) {
      res.status(500).json({ message: 'Error creating reminder ' + error });
    }
};

// Get all reminders 
export const getAllReminders = async (req: Request, res: Response) => {
    const fetchRemindersPromise = new Promise(async (resolve, reject) => {
      try {
        const reminders = await Reminder.find();
        resolve(reminders);
      } catch (error) {
        reject(error);
      }
    });
    try {
      const reminders = await fetchRemindersPromise;
      res.status(200).json(reminders);
    } catch (error) {
      res.status(500).json({ message: 'Error getting reminders ' + error });
    }
};

// Get a reminder by ID - R
export const getReminderById  = async (req: Request, res: Response) => {
    const { id } = req.params as { id: string };
    const fetchReminderPromise = new Promise(async (resolve, reject) => {
      try {
        const reminder = await Reminder.findById(id);
        if (!reminder) {
          reject(new Error("Reminder doesn't exist"));
        }
        resolve(reminder);
      } catch (error) {
        reject(error);
      }
    });
    
    try {
      const reminder = await fetchReminderPromise;
      res.status(200).json(reminder);
    } catch (error) {
      res.status(500).json({ message: 'Error getting reminder ' + error });
    }
}
// Update a reminder by ID - U 
export const updateReminder = async (req: Request, res: Response) => {
 const updateReminderPromise = new Promise(async (resolve, reject) => {
  try {
    const reminder = await Reminder.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!reminder) {
      reject(new Error("Reminder doesn't exist"));
    }
    resolve(reminder);
  } catch (error) {
    reject(error);
  }

  try {
    const reminder = await updateReminderPromise;
    res.status(200).json(reminder);
  } catch (error) {
    res.status(500).json({ message: 'Error updating reminder ' + error });
  }
});

};

// Delete a reminder by ID - D
export const deleteReminder = async (req: Request, res: Response) => {
  const deleteReminderPromise = new Promise(async (resolve, reject) => {
    try {
      const reminder = await Reminder.findByIdAndDelete(req.params.id);
      if (!reminder) {
        reject(new Error("Reminder doesn't exist"));
      }
      resolve(reminder);
    } catch (error) {
      reject(error);
    }

    try {
      const reminder = await deleteReminderPromise;
      res.status(200).json({ message: "Reminder deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: 'Error deleting reminder ' + error });
    }
  });
}


