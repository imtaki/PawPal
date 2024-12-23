import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaPaw } from "react-icons/fa";

const Pets: React.FC = () => {
  const [pets, setPets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/pets");
        setPets(response.data);
      } catch (err) {
        setError("Failed to fetch pets. Please try again later.");
      } finally {
        setIsLoading(false);
        setTimeout(() => setIsLoading(false), 5000);
      }
    };
    fetchPets();
  }, []);

  async function deletePet(id: number) {
    try {
      await axios.delete(`http://localhost:3001/api/pets/${id}`);
      setPets(pets.filter((pet: any) => pet._id !== id));
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-indigo-400 via-blue-300 to-white">
      <div className="flex-grow w-full mx-auto mt-12 px-4 max-w-7xl">
        <div className="flex flex-col w-full sm:flex-row justify-center items-center gap-6 mb-12">
          <h1 className="text-center text-5xl font-extrabold text-black sm:text-6xl flex items-center gap-4">
            Your Pets
          </h1>
          <a
            href="/addpets"
            className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-transform duration-200 hover:scale-105 hover:shadow-xl"
          >
            + Add Pets
          </a>
        </div>

        {error && (
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded animate-fade-in">
            {error}
          </div>
        )}

        {!isLoading && pets.length === 0 && (
          <div className="text-center py-12 bg-gray-50 rounded-lg animate-slide-in">
            <FaPaw className="mx-auto text-5xl text-gray-300 mb-4" />
            <p className="text-xl text-gray-500">No pets found. Add your first pet!</p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-start">
          {!isLoading &&
            pets.map((pet: any) => (
              <div
                key={pet._id}
                className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-2xl transition-transform duration-200 hover:scale-105 animate-slide-in"
              >
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-blue-800 mb-4 flex items-center gap-2">
                    <FaPaw className="text-blue-500" />
                    {pet.name}
                  </h2>
                  <div className="space-y-2 text-gray-700">
                    <p><span className="font-semibold">Breed:</span> {pet.breed}</p>
                    <p><span className="font-semibold">Age:</span> {pet.age}</p>
                    <p><span className="font-semibold">Medical History:</span> {pet.medicalHistory.join(", ")}</p>
                  </div>
                  <div className="flex justify-between mt-6 gap-4">
                    <a
                      href={`/updatepets/${pet._id}`}
                      className="flex-1 text-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-2 px-6 rounded-full shadow transition-transform duration-200 hover:scale-105"
                    >
                      Update
                    </a>
                    <button
                      onClick={() => deletePet(pet._id)}
                      className="flex-1 bg-gradient-to-r from-red-500 to-red-700 text-white font-semibold py-2 px-6 rounded-full shadow transition-transform duration-200 hover:scale-105"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Pets;

