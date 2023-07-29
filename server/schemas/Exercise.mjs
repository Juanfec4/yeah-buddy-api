import { Schema, model } from "mongoose";

//import used schemas
import Set from "./Set.mjs";
import Note from "./Note.mjs";

const exerciseSchema = new Schema({
  name: String,
  category: String,
  bodyPart: String,
  bestReps: { type: Number, default: 0 },
  bestWeight: { type: Number, default: 0 },
  bestVolume: { type: Number, default: 0 },
  sets: { type: [Set.schema], default: [] },
  notes: { type: [Note.schema], default: [] },
});

export default model("Exercise", exerciseSchema);
