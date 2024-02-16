// src/controllers/skillController.ts
import { Request, Response } from 'express';
import * as profileService from '../services/profileService';

export const getProfile = async (req: Request, res: Response) => {
    const profile = await profileService.getProfile();
    res.json(profile);
};

export const createProfile = async (req: Request, res: Response) => {
    const body = req.body;
    const profile = await profileService.createProfile(body);

    if (profile) {
        res.status(201).json(profile);
    } else {
        res.status(404).json({ message: 'profile not created' });
    }
};
