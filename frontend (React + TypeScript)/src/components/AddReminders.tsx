import React, { useState } from "react";
import ReminderForm from "./Form/ReminderForm";
import axios from "axios";
import { useEffect } from "react";

interface AddReminderModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

const AddRemindersModal: React.FC<AddReminderModalProps> = ({ isOpen, onClose, onSuccess }) => {
  const [title, setTitle] = useState("");
  const [petName, setPetName] = useState("");
  const [customDate, setCustomDate] = useState<Date | null>(new Date());
  const [message, setMessage] = useState("");
  const [description, setDescription] = useState("");
  const [pets, setPets] = useState<Array<{_id: string, name: string}>>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!customDate) {
      setMessage("Please select a date and time.");
      return;
    }

    try {
      const reminderData = {
        title,
        petName,
        description,
        customDate: customDate.toISOString(),
      };

      await axios.post("http://localhost:3001/api/reminders", reminderData);
      setMessage("Reminder added successfully!");
      onSuccess();
      onClose();
      
      // Reset form
      setTitle("");
      setPetName("");
      setCustomDate(new Date());
      setDescription("");
    } catch (error) {
      setMessage("Error adding reminder. Please try again.");
    }
  };
  useEffect(() => {
    const fetchPets = async () => {
      const response = await axios.get("http://localhost:3001/api/pets");
      setPets(response.data);
    };
    fetchPets();
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md m-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold text-blue-600">Add a New Reminder</h1>
          <button onClick={onClose} className="text-gray-500 text-3xl hover:text-gray-700">×</button>
        </div>
        {message && (
          <p className={`text-center mb-4 ${message.includes("successfully") ? "text-green-600" : "text-red-600"}`}>
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
          pets={pets}
        />
      </div>
    </div>
  );
};

export default AddRemindersModal;

