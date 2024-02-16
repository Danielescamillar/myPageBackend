// src/routes/ExperieRoutes.ts
import express from 'express';
import * as experienceController from '../controllers/experienceController';

const router = express.Router();

router.get('/', experienceController.getAllExperiences);
router.post('/', experienceController.createExperienceByBody);

export default router;
