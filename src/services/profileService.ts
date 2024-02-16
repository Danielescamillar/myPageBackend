// src/services/profileService.ts
import { Profile } from '../models/profileModel';
import ProfileModel, { ProfileDocument } from '../db/models/profileModel';

export const getProfile= async (): Promise<Profile[]> => {
  try {
    const profile = await ProfileModel.find();
    return profile.map(mapToProfile);
  } catch (error: any) {
    throw new Error(`Failed to get Profile: ${error.message}`);
  }
};


export const createProfile = async (body: string): Promise<Profile | null> => {
  try {
    const profile = await ProfileModel.create(body);
    return profile ? mapToProfile(profile) : null;
  } catch (error: any) {
    throw new Error(`Failed to get profile: ${error.message}`);
  }
};

// Function to map the mongoose document to a Profile object
const mapToProfile = (profile: ProfileDocument): Profile => ({
  description: profile.description,
});
