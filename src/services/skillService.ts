// src/services/skillService.ts
import { Skill } from '../models/skillModel';
import SkillModel, { SkillDocument } from '../db/models/skillModel';

export const getAllSkills = async (): Promise<Skill[]> => {
  try {
    const skills = await SkillModel.find();
    return skills.map(mapToSkill);
  } catch (error: any) {
    throw new Error(`Failed to get skill: ${error.message}`);
  }
};

export const getSkillById = async (id: string): Promise<Skill | null> => {
  try {
    const skill = await SkillModel.findById(id);
    return skill ? mapToSkill(skill) : null;
  } catch (error: any) {
    throw new Error(`Error al obtener la habilidad: ${error.message}`);
  }
};

export const createSkill = async (body: string): Promise<Skill | null> => {
  try {
    const skill = await SkillModel.create(body);
    return skill ? mapToSkill(skill) : null;
  } catch (error: any) {
    throw new Error(`Failed to get skill: ${error.message}`);
  }
};

// Función para mapear el documento de mongoose a un objeto Skill
const mapToSkill = (skill: SkillDocument): Skill => ({
  id: skill._id.toString(),
  name: skill.name,
  description: skill.description,
  image: skill.image
});
