import { Schema, model } from "mongoose";

const setSchema = new Schema({
  weight: { type: Number, default: 0 },
  reps: { type: Number, default: 0 },
  volume: { type: Number, default: 0 },
});

export default model("Set", setSchema);
