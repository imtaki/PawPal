import React, { useState, useEffect } from "react";
import axios from "axios";
import AddRemindersModal from "./AddReminders";
import UpdateReminderModal from "./UpdateReminder";

const Reminders: React.FC = () => {
  const [reminders, setReminders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [selectedReminderId, setSelectedReminderId] = useState("");

  const fetchReminders = async () => {
    try {
      const response = await axios.get("http://localhost:3001/api/reminders");
      setReminders(response.data);
    } catch (err) {
      setError("Failed to fetch reminders. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchReminders();
  }, []);

  async function deleteReminder(id: string) {
    try {
      await axios.delete(`http://localhost:3001/api/reminders/${id}`);
      setReminders(reminders.filter((reminder: any) => reminder._id !== id));
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-indigo-400 via-blue-300 to-white">
      <div className="w-full mx-auto mt-12 px-4 max-w-7xl">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-12">
          <h1 className="text-center text-5xl font-extrabold text-black sm:text-6xl flex items-center gap-4">
            Your Reminders
          </h1>
          <button
            onClick={() => setIsAddModalOpen(true)}
            className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-transform duration-200 hover:scale-105 hover:shadow-xl"
          >
            + Add Reminders
          </button>
        </div>

        {error && (
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded animate-fade-in">
            {error}
          </div>
        )}

        {isLoading && (
          <p className="text-center text-gray-500 mt-6 animate-fade-in">
            Loading reminders...
          </p>
        )}

        {!isLoading && reminders.length === 0 && (
          <div className="text-center py-12 bg-gray-50 rounded-lg animate-slide-in">
            <p className="text-xl text-gray-500">
              No reminders found. Add your first reminder!
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {!isLoading &&
            reminders.map((reminder: any) => (
              <div
                key={reminder._id}
                className="bg-white border border-gray-300 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300 animate-slide-in"
              >
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-blue-800 mb-4 flex items-center gap-2">
                    {reminder.title}
                  </h2>
                  <p className="text-gray-700">
                    <strong>Pet Name:</strong> {reminder.petName}
                  </p>
                  <p className="text-gray-700">
                    <strong>Date & Time:</strong>{" "}
                    {new Date(reminder.customDate).toLocaleString()}
                  </p>
                  <p className="text-gray-700">
                    <strong>Description:</strong> {reminder.description}
                  </p>
                  <div className="flex justify-between mt-6 gap-4">
                    <button
                      onClick={() => {
                        setSelectedReminderId(reminder._id);
                        setIsUpdateModalOpen(true);
                      }}
                      className="flex-1 text-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-2 px-6 rounded-full shadow transition-transform duration-200 hover:scale-105"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => deleteReminder(reminder._id)}
                      className="flex-1 bg-gradient-to-r from-red-500 to-red-700 text-white font-semibold py-2 px-6 rounded-full shadow transition-transform duration-200 hover:scale-105"
                    >
                      Delete Reminder
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>

        <AddRemindersModal 
          isOpen={isAddModalOpen}
          onClose={() => setIsAddModalOpen(false)}
          onSuccess={() => {
            fetchReminders();
            setIsAddModalOpen(false);
          }}
        />
        
        <UpdateReminderModal 
          isOpen={isUpdateModalOpen}
          onClose={() => setIsUpdateModalOpen(false)}
          onSuccess={() => {
            fetchReminders();
            setIsUpdateModalOpen(false);
          }}
          id={selectedReminderId}
        />
      </div>
    </div>
  );
};

export default Reminders;

