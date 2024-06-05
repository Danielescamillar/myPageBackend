// src/db/models/skillModel.ts
import mongoose, { Schema, Document } from 'mongoose';

export interface TurnDocument extends Document {
  turn: string;
}

const TurnSchema: Schema = new Schema({
  turn: { type: String, required: true },
});

const TurnModel = mongoose.model<TurnDocument>('Turn', TurnSchema);

export default TurnModel;
