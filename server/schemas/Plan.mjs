import { Schema, model } from "mongoose";

//import used schemas
import Exercise from "./Exercise.mjs";

const planSchema = new Schema({
  name: String,
  lastPerformed: { type: Date, default: () => new Date() },
  exercises: { type: [Exercise.schema], default: [] },
});

export default model("Plan", planSchema);
