import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface ReminderFormProps {
  title: string;
  petName: string;
  customDate: Date | null;
  description: string;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  setTitle: (value: string) => void;
  setPetName: (value: string) => void;
  setCustomDate: (date: Date | null) => void;
  setDescription: (value: string) => void;
  submitButtonText: string;
  pets: Array<{_id: string, name: string}>;
}

const ReminderForm: React.FC<ReminderFormProps> = ({
  title,
  petName,
  customDate,
  description,
  onSubmit,
  setTitle,
  setPetName,
  setCustomDate,
  setDescription,
  submitButtonText,
  pets
}) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="mb-4">
        <label className="block font-semibold mb-2">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border border-gray-300 rounded-md p-2"
          placeholder="Enter a title"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block font-semibold mb-2">Pet Name</label>
        <select
          value={petName}
          onChange={(e) => setPetName(e.target.value)}
          className="w-full border border-gray-300 rounded-md p-2"
          required
        >
          <option value="">Select a pet</option>
          {pets.map((pet) => (
            <option key={pet._id} value={pet.name}>
              {pet.name}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block font-semibold mb-2">Date and Time</label>
        <DatePicker
          selected={customDate}
          onChange={(date) => setCustomDate(date)}
          showTimeSelect
          dateFormat="Pp"
          className="w-full border border-gray-300 rounded-md p-2"
        />
      </div>
      <div className="mb-4">
        <label className="block font-semibold mb-2">Description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border border-gray-300 rounded-md p-2"
          placeholder="Enter description"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold py-2 px-4 rounded shadow-md w-full hover:from-blue-700 hover:to-blue-500 transition duration-200"
      >
        {submitButtonText}
      </button>
    </form>
  );
};

export default ReminderForm;
