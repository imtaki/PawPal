import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const UpdateReminder: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchReminder = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/reminders/${id}`);
        const reminder = response.data;

        setTitle(reminder.title);
        setDate(reminder.date);
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
        date,
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
        <form onSubmit={handleUpdate} className="space-y-4">
          <div className="mb-4">
            <label className="block font-semibold mb-2" htmlFor="reminder-title">
              Title
            </label>
            <input
              type="text"
              name="reminder-title"
              id="reminder-title"
              placeholder="Enter title"
              className="w-full border border-gray-300 rounded-md p-2"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block font-semibold mb-2" htmlFor="reminder-date">
              Date
            </label>
            <input
              type="date"
              name="reminder-date"
              id="reminder-date"
              className="w-full border border-gray-300 rounded-md p-2"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block font-semibold mb-2" htmlFor="reminder-description">
              Description
            </label>
            <textarea
              name="reminder-description"
              id="reminder-description"
              placeholder="Enter description"
              className="w-full border border-gray-300 rounded-md p-2"
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold py-2 px-4 rounded shadow-md w-full hover:from-blue-700 hover:to-blue-500 transition duration-200"
          >
            Update Reminder
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateReminder;



