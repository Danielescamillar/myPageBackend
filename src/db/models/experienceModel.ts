// src/db/models/experienceModel.ts
import mongoose, { Schema, Document } from 'mongoose';

export interface ExperienceDocument extends Document {
  title: string;
  date: string;
  company: string;
  description: string;
}

const ExperienceSchema: Schema = new Schema({
  title: { type: String, required: true },
  date: { type: String, required: true },
  company: { type: String, required: true },
  description: { type: String, required: true },
});

const ExperienceModel = mongoose.model<ExperienceDocument>('Experience', ExperienceSchema);

export default ExperienceModel;
