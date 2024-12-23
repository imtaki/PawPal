import { Request, Response } from 'express';
import Pet from '../models/Pet';

// Create a new pet - C
export const createPet = async (req: Request, res: Response) => {
  const { name, age, breed, medicalHistory, owner } = req.body;
    
  const createPetPromise = new Promise(async (resolve, reject) => {
      try {
          const newPet = new Pet({ name, age, breed, medicalHistory, owner  });
          const savedPet = await newPet.save();
          resolve(savedPet);
      } catch (error) {
          reject(error);
      }
  });

  try {
      const pet = await createPetPromise;
      res.status(201).json(pet);
  } catch (error) {
      res.status(500).json({ message: 'Error creating pet ' + error });
  }
};

// Get all pets 
export const getAllPets = async (req: Request, res: Response) => {
  const fetchPetsPromise = new Promise(async (resolve, reject) => {
      try {
          const pets = await Pet.find();
          resolve(pets);
      } catch (error) {
          reject(error);
      }
  });

  try {
      const pets = await fetchPetsPromise;
      res.status(200).json(pets);
  } catch (error) {
      res.status(500).json({ message: 'Error getting pets ' + error });
  }
};

// Get a pet by ID - R
export const getPetById = async (req: Request, res: Response) => {
  const { id } = req.params;
    
  const fetchPetPromise = new Promise(async (resolve, reject) => {
      try {
          const pet = await Pet.findById(id);
          if (!pet) {
              reject(new Error("Pet doesn't exist"));
          }
          resolve(pet);
      } catch (error) {
          reject(error);
      }
  });

  try {
      const pet = await fetchPetPromise;
      res.status(200).json(pet);
  } catch (error) {
      res.status(500).json({ message: 'Error getting pet ' + error });
  }
};

// Update a pet by ID - U 
export const updatePet = async (req: Request, res: Response) => {
  const updatePetPromise = new Promise(async (resolve, reject) => {
      try {
          const pet = await Pet.findByIdAndUpdate(req.params.id, req.body, { new: true });
          if (!pet) {
              reject(new Error("Pet doesn't exist"));
          }
          resolve(pet);
      } catch (error) {
          reject(error);
      }
  });

  try {
      await updatePetPromise;
      res.status(200).json({ message: "Pet updated successfully" });
  } catch (error) {
      res.status(500).json({ message: 'Error updating pet ' + error });
  }
};

// Delete a pet by ID - D
export const deletePet = async (req: Request, res: Response) => {
  const deletePetPromise = new Promise(async (resolve, reject) => {
      try {
          const pet = await Pet.findByIdAndDelete(req.params.id);
          if (!pet) {
              reject(new Error("Pet doesn't exist"));
          }
          resolve(pet);
      } catch (error) {
          reject(error);
      }
  });

  try {
      const pet = await deletePetPromise;
      res.status(200).json(pet);
  } catch (error) {
      res.status(500).json({ message: 'Error deleting pet ' + error });
  }
};