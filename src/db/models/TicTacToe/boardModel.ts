// src/db/models/skillModel.ts
import mongoose, { Schema, Document } from 'mongoose';

export interface BoardDocument extends Document {
  board: string;
}

const BoardSchema: Schema = new Schema({
  board: { type: String, required: true },
});

const BoardModel = mongoose.model<BoardDocument>('Board', BoardSchema);

export default BoardModel;
