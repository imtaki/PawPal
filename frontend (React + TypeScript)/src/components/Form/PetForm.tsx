import React from 'react';

interface PetFormProps {
  name: string;
  age: number;
  breed: string;
  medicalHistory: string;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  setName: (value: string) => void;
  setAge: (value: number) => void;
  setBreed: (value: string) => void;
  setMedicalHistory: (value: string) => void;
  submitButtonText: string;
}

const PetForm: React.FC<PetFormProps> = ({
  name,
  age,
  breed,
  medicalHistory,
  onSubmit,
  setName,
  setAge,
  setBreed,
  setMedicalHistory,
  submitButtonText
}) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="mb-4">
        <label className="block font-semibold mb-2">Pet Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border border-gray-300 rounded-md p-2"
          placeholder="Enter pet name"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block font-semibold mb-2">Pet Age</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(Number(e.target.value))}
          className="w-full border border-gray-300 rounded-md p-2"
          placeholder="Enter pet age"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block font-semibold mb-2">Pet Breed</label>
        <input
          type="text"
          value={breed}
          onChange={(e) => setBreed(e.target.value)}
          className="w-full border border-gray-300 rounded-md p-2"
          placeholder="Enter pet breed"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block font-semibold mb-2">Medical History</label>
        <input
          type="text"
          value={medicalHistory}
          onChange={(e) => setMedicalHistory(e.target.value)}
          className="w-full border border-gray-300 rounded-md p-2"
          placeholder="Enter medical history (comma separated)"
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

export default PetForm;
