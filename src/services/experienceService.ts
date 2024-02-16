// src/services/experienceService.ts
import { Experience } from '../models/experienceModel';
import ExperienceModel, { ExperienceDocument } from '../db/models/experienceModel';

export const getExperience = async (): Promise<Experience[]> => {
  try {
    const experience = await ExperienceModel.find();
    return experience.map(mapToExperience);
  } catch (error: any) {
    throw new Error(`Failed to get Experience: ${error.message}`);
  }
};


export const createExperience = async (body: string): Promise<Experience | null> => {
  try {
    const experience = await ExperienceModel.create(body);
    return experience ? mapToExperience(experience) : null;
  } catch (error: any) {
    throw new Error(`Failed to get Experience: ${error.message}`);
  }
};

// Function to map the mongoose document to a Experience object
const mapToExperience = (experience: ExperienceDocument): Experience => ({
  title: experience.title,
  date: experience.date,
  company: experience.company,
  description: experience.description
});
