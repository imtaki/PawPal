import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import ReminderForm from "./Form/ReminderForm";

const UpdateReminder: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [petName, setPetName] = useState("");
  const [customDate, setCustomDate] = useState<Date | null>(new Date());
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchReminder = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/reminders/${id}`);
        const reminder = response.data;

        setTitle(reminder.title);
        setPetName(reminder.petName);
        setCustomDate(new Date(reminder.customDate));
        setDescription(reminder.description);
      } catch (err) {
        setError("Failed to load reminder details.");
      }
    };
    fetchReminder();
  }, [id]);

  const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const updatedReminder = {
        title,
        petName,
        customDate: customDate?.toISOString(),
        description,
      };

      await axios.put(`http://localhost:3001/api/reminders/${id}`, updatedReminder);
      navigate("/reminders");
    } catch (err) {
      setError("Failed to update reminder. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 font-lusitana">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6 text-blue-600">
          Update Reminder
        </h1>
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
        />
      </div>
    </div>
  );
};

export default UpdateReminder;