import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

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
        <form onSubmit={handleUpdate} className="space-y-4">
          <div className="mb-4">
            <label className="block font-semibold mb-2" htmlFor="pet-name">
              Pet Name
            </label>
            <input
              type="text"
              name="pet-name"
              id="pet-name"
              placeholder="Enter pet name"
              className="w-full border border-gray-300 rounded-md p-2"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block font-semibold mb-2" htmlFor="pet-age">
              Pet Age
            </label>
            <input
              type="number"
              name="pet-age"
              id="pet-age"
              placeholder="Enter pet age"
              className="w-full border border-gray-300 rounded-md p-2"
              value={age}
              onChange={(e) => setAge(Number(e.target.value))}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block font-semibold mb-2" htmlFor="pet-breed">
              Pet Breed
            </label>
            <input
              type="text"
              name="pet-breed"
              id="pet-breed"
              placeholder="Enter pet breed"
              className="w-full border border-gray-300 rounded-md p-2"
              value={breed}
              onChange={(e) => setBreed(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block font-semibold mb-2" htmlFor="pet-med-hist">
              Medical History
            </label>
            <input
              type="text"
              name="pet-med-hist"
              id="pet-medical-history"
              placeholder="Enter medical history (comma separated)"
              className="w-full border border-gray-300 rounded-md p-2"
              value={medicalHistory}
              onChange={(e) => setMedicalHistory(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold py-2 px-4 rounded shadow-md w-full hover:from-blue-700 hover:to-blue-500 transition duration-200"
          >
            Update Pet
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdatePets;

