import express from "express";
import {createPet, getAllPets, getPetById, updatePet, deletePet} from "../controllers/petsController";
import { authenticateToken } from "../middleware/authMiddleware";
const router = express.Router();

router.post('/',authenticateToken, createPet );
router.get('/',authenticateToken, getAllPets );
router.get('/:id',authenticateToken, getPetById );
router.put('/:id',authenticateToken, updatePet );
router.delete('/:id',authenticateToken, deletePet );

export default router;