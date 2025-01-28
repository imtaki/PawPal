import React, { useState, useEffect } from "react";
import ReminderForm from "./Form/ReminderForm";
import api from "../axios";

interface UpdateRemindersModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  id: string;
}

const UpdateReminderModal: React.FC<UpdateRemindersModalProps> = ({ isOpen, onClose, onSuccess, id }) => {
  const [title, setTitle] = useState("");
  const [petName, setPetName] = useState("");
  const [customDate, setCustomDate] = useState<Date | null>(new Date());
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const [pets, setPets] = useState<Array<{_id: string, name: string}>>([]);

  useEffect(() => {
    const fetchReminder = async () => {
      if (!id) return;
      
      try {
        const response = await api.get(`/api/reminders/${id}`);
        const reminder = response.data;

        setTitle(reminder.title);
        setPetName(reminder.petName);
        setCustomDate(new Date(reminder.customDate));
        setDescription(reminder.description);
        setError("");
      } catch (err) {
        setError("Failed to load reminder details.");
      }
    };

    if (isOpen) {
      fetchReminder();
    }
  }, [id, isOpen]);

  const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!customDate) {
      setError("Please select a date and time.");
      return;
    }

    try {
      const updatedReminder = {
        title,
        petName,
        customDate: customDate.toISOString(),
        description,
      };

      await api.put(`/api/reminders/${id}`, updatedReminder);
      onSuccess();
      onClose();
    } catch (err) {
      setError("Failed to update reminder. Please try again.");
    }
  };
  useEffect(() => {
    const fetchPets = async () => {
      const response = await api.get("/api/pets");
      setPets(response.data);
    };
    fetchPets();
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md m-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold text-blue-600">Update Reminder</h1>
          <button onClick={onClose} className="text-gray-500 text-4xl hover:text-gray-700">×</button>
        </div>
        {error && (
          <p className="text-center mb-4 text-red-600">{error}</p>
        )}
        <ReminderForm
          title={title}
          petName={petName}
          customDate={customDate}
          description={description}
          onSubmit={handleUpdate}
          setTitle={setTitle}
          setPetName={setPetName}
          setCustomDate={setCustomDate}
          setDescription={setDescription}
          submitButtonText="Update Reminder"
          pets={pets}
        />
      </div>
    </div>
  );
};

export default UpdateReminderModal;
