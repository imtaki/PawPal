import React, { useState } from "react";
import ReminderForm from "./Form/ReminderForm";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddReminders: React.FC = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [petName, setPetName] = useState("");
  const [customDate, setCustomDate] = useState<Date | null>(new Date()); 
  const [message, setMessage] = useState("");
  const [description, setDescription] = useState("");

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!customDate) {
      setMessage("Please select a date and time.");
      return;
  }

  const addReminderPromise = new Promise(async (resolve, reject) => {
      const reminderData = {
          title,
          petName,
          description,
          customDate: customDate.toISOString(),
      };

      try {
          const response = await axios.post("http://localhost:3001/api/reminders", reminderData);
          resolve(response.data);
      } catch (error) {
          reject(error);
      }
  });

  try {
      await addReminderPromise;
      setMessage("Reminder added successfully! Redirecting to reminders list...");
      setTitle("");
      setPetName("");
      setDescription("");
      setCustomDate(new Date());

      setTimeout(() => {
        navigate("/reminders");
    }, 2000);
  } catch (error) {
      setMessage("Error adding reminder. Please try again.");
      console.error(error);
  }
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 font-lusitana">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6 text-blue-600">
          Add a New Reminder
        </h1>
        {message && (
          <p
            className={`text-center mb-4 ${
              message.includes("successfully")
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {message}
          </p>
        )}
        <ReminderForm
          title={title}
          petName={petName}
          customDate={customDate}
          description={description}
          onSubmit={handleSubmit}
          setTitle={setTitle}
          setPetName={setPetName}
          setCustomDate={setCustomDate}
          setDescription={setDescription}
          submitButtonText="Add Reminder"
        />

      </div>
    </div>
  );
};

export default AddReminders;
