// src/db/models/skillModel.ts
import mongoose, { Schema, Document } from 'mongoose';

export interface SkillDocument extends Document {
  name: string;
  description: string;
  image: string
}

const SkillSchema: Schema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
});

const SkillModel = mongoose.model<SkillDocument>('Skill', SkillSchema);

export default SkillModel;
