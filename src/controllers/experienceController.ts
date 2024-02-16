// src/controllers/experienceController.ts
import { Request, Response } from 'express';
import * as experienceService from '../services/experienceService';

export const getAllExperiences = async (req: Request, res: Response) => {
    const experiences = await experienceService.getExperience();
    res.json(experiences);
};

export const createExperienceByBody = async (req: Request, res: Response) => {
    const body = req.body;
    const experience = await experienceService.createExperience(body);

    if (experience) {
        res.status(201).json(experience);
    } else {
        res.status(404).json({ message: 'Experience not created' });
    }
};
