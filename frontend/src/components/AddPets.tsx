import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const AddPets: React.FC = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [breed, setBreed] = useState('');
    const [medicalHistory, setMedicalHistory] = useState('');
    const [message, setMessage] = useState("");

    const handleAddPets = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    
        const addPetPromise = new Promise(async (resolve, reject) => {
            const petData = {
                name,
                age,
                breed,
                medicalHistory: medicalHistory.split(',').map(item => item.trim()),
            };
        
            try {
                const response = await axios.post('http://localhost:3001/api/pets', petData);
                resolve(response.data);
            } catch (error) {
                reject(error);
            }
        });

        try {
            await addPetPromise;
            setMessage("Pet added successfully! Redirecting to pet list...");
            setName('');
            setAge(0);
            setBreed('');
            setMedicalHistory('');
            setTimeout(() => {
              navigate("/pets");
          }, 2000);
        } catch (error) {
            setMessage("Error adding pet. Please try again.");
            console.error('Error adding pet:', error);
        }
    };    return (
        <>
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 font-lusitana">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6 text-blue-600">
          Add a New Pet
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
        <form onSubmit={handleAddPets}>
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
              placeholder="Enter your pet's name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block font-semibold mb-2">Pet Breed</label>
            <input
              type='text'
              value={breed}
              onChange={(e) => setBreed(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2"
              placeholder="Enter your pet's breed"
            />
          </div>
          
          <div className="mb-4">
            <label className="block font-semibold mb-2">Medical History</label>
            <input
              type='text'
              value={medicalHistory}
              onChange={(e) => setMedicalHistory(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2"
              placeholder="Enter medical history (if any)"
            />
          </div>
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold py-2 px-4 rounded shadow-md w-full hover:from-blue-700 hover:to-blue-500 transition duration-200"
          >
            Add Pet
          </button>
        </form>
      </div>
    </div>
        
    </>
    );
};

export default AddPets;