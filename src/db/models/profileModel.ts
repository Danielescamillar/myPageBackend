// src/db/models/profileModel.ts
import mongoose, { Schema, Document } from 'mongoose';

export interface ProfileDocument extends Document {
  description: string;
}

const ProfileSchema: Schema = new Schema({
  description: { type: String, required: true },
});

const ProfileModel = mongoose.model<ProfileDocument>('Profile', ProfileSchema);

export default ProfileModel;
