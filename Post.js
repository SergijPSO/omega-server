import mongoose from "mongoose";

const Post = new mongoose.Schema({
  title: { type: String, required: true },
  summary: { type: String, required: true },
  text: { type: String, required: true },
  picture: { type: String },
});

export default mongoose.model("Post", Post);
