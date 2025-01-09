import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import PetForm from './Form/PetForm';
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
    };    
    return (
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
       <PetForm
          name={name}
          age={age}
          breed={breed}
          medicalHistory={medicalHistory}
          onSubmit={handleAddPets}
          setName={setName}
          setAge={setAge}
          setBreed={setBreed}
          setMedicalHistory={setMedicalHistory}
          submitButtonText="Add Pet"
        />
      </div>
    </div>
    );
};

export default AddPets;