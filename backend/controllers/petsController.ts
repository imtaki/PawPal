import { Request, Response } from 'express';
import Pet from '../models/Pet';

interface AuthenticatedRequest extends Request {
    user?: { id: string };
}

export const createPet = async (req: AuthenticatedRequest, res: Response) => {
    const { name, age, breed, medicalHistory } = req.body;
    
    const createPetPromise = new Promise(async (resolve, reject) => {
        try {
            const newPet = new Pet({ 
                name, 
                age, 
                breed, 
                medicalHistory,
                user: req.user?.id 
            });
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

export const getAllPets = async (req: AuthenticatedRequest, res: Response) => {
    const fetchPetsPromise = new Promise(async (resolve, reject) => {
        try {
            const pets = await Pet.find({ user: req.user?.id });
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

export const getPetById = async (req: AuthenticatedRequest, res: Response) => {
    const { id } = req.params;
    
    const fetchPetPromise = new Promise(async (resolve, reject) => {
        try {
            const pet = await Pet.findOne({ _id: id, user: req.user?.id });
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

export const updatePet = async (req: AuthenticatedRequest, res: Response) => {
    const updatePetPromise = new Promise(async (resolve, reject) => {
        try {
            const pet = await Pet.findOneAndUpdate(
                { _id: req.params.id, user: req.user?.id },
                req.body,
                { new: true }
            );
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

export const deletePet = async (req: AuthenticatedRequest, res: Response) => {
    const deletePetPromise = new Promise(async (resolve, reject) => {
        try {
            const pet = await Pet.findOneAndDelete({ 
                _id: req.params.id, 
                user: req.user?.id 
            });
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
