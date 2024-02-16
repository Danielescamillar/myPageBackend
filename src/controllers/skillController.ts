// src/controllers/skillController.ts
import { Request, Response } from 'express';
import * as skillService from '../services/skillService';

export const getAllSkills = async (req: Request, res: Response) => {
    const skills = await skillService.getAllSkills();
    res.json(skills);
};

export const getSkillById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const skill =  await skillService.getSkillById(id);

    if (skill) {
        res.json(skill);
    } else {
        res.status(404).json({ message: 'Skill not found' });
    }
};

export const createSkillByBody = async (req: Request, res: Response) => {
    const body = req.body;
    const skill = await skillService.createSkill(body);

    if (skill) {
        res.status(201).json(skill);
    } else {
        res.status(404).json({ message: 'Skill not created' });
    }
};
