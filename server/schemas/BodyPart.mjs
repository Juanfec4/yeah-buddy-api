import { Schema, model } from "mongoose";

const bodyPartSchema = new Schema({
  name: String,
});

export default model("BodyPart", bodyPartSchema);
