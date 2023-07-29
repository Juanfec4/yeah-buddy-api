import { Schema, model } from "mongoose";

const noteSchema = new Schema({
  content: String,
  timeStamp: Date,
});

export default model("Note", noteSchema);
