import React, { useState } from 'react';
import  { api } from '../axios';
import PetForm from './Form/PetForm';
interface AddPetsModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSuccess: () => void;
}

const AddPetsModal: React.FC<AddPetsModalProps> = ({ isOpen, onClose, onSuccess }) => {
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [breed, setBreed] = useState('');
    const [medicalHistory, setMedicalHistory] = useState('');

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
                const response = await api.post('/pets', petData);
                resolve(response.data);
            } catch (error) {
                reject(error);
            }
        });

        try {
            await addPetPromise;
            onSuccess(); 
            onClose();
        } catch (error) {
            console.error('Failed to add pet:', error);
        }
    };    
    if (!isOpen) return null;
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md m-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold text-blue-600">Add a New Pet</h1>
          <button onClick={onClose} className="text-gray-500 text-3xl hover:text-gray-700">×</button>
        </div>
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

export default AddPetsModal;