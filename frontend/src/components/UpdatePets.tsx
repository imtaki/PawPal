import React, { useState, useEffect } from "react";
import PetForm from "./Form/PetForm";
import api from "../axios";

interface UpdatePetsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  petId: string;
}

const UpdatePetsModal: React.FC<UpdatePetsModalProps> = ({ isOpen, onClose, onSuccess, petId }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [breed, setBreed] = useState("");
  const [medicalHistory, setMedicalHistory] = useState("");

  useEffect(() => {
    const fetchPet = async () => {
      try {
        const response = await api.get(`/api/pets/${petId}`);
        const pet = response.data;
        setName(pet.name);
        setAge(pet.age);
        setBreed(pet.breed);
        setMedicalHistory(pet.medicalHistory.join(", "));
      } catch (err) {
        console.error(err);
      }
    };
    if (isOpen) fetchPet();
  }, [petId, isOpen]);

  const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const updatedPet = {
        name,
        age,
        breed,
        medicalHistory: medicalHistory.split(",").map((item) => item.trim()),
      };
      await api.put(`/api/pets/${petId}`, updatedPet);
      onSuccess();
      onClose();
    } catch (err) {
      console.error(err);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md m-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold text-blue-600">Update Pet</h1>
          <button onClick={onClose} className="text-gray-500 text-4xl hover:text-gray-700">×</button>
        </div>
        <PetForm
          name={name}
          age={age}
          breed={breed}
          medicalHistory={medicalHistory}
          onSubmit={handleUpdate}
          setName={setName}
          setAge={setAge}
          setBreed={setBreed}
          setMedicalHistory={setMedicalHistory}
          submitButtonText="Update Pet"
        />
      </div>
    </div>
  );
};

export default UpdatePetsModal;