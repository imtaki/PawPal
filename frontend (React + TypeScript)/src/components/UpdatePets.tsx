import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import PetForm from "./Form/PetForm";

const UpdatePets: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [breed, setBreed] = useState("");
  const [medicalHistory, setMedicalHistory] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPet = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/pets/${id}`);
        const pet = response.data;

        setName(pet.name);
        setAge(pet.age);
        setBreed(pet.breed);
        setMedicalHistory(pet.medicalHistory.join(", "));
      } catch (err) {
        setError("Failed to load pet details.");
      }
    };
    fetchPet();
  }, [id]);

  const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const updatedPet = {
        name,
        age,
        breed,
        medicalHistory: medicalHistory.split(",").map((item) => item.trim()),
      };

      await axios.put(`http://localhost:3001/api/pets/${id}`, updatedPet);
      navigate("/pets");
    } catch (err) {
      setError("Failed to update pet. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 font-lusitana">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6 text-blue-600">
          Update Pet
        </h1>
        {error && (
          <p className="text-center mb-4 text-red-600">{error}</p>
        )}
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

export default UpdatePets;

