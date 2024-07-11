import mongoose from "mongoose";

const produtoSchema = new mongoose.Schema(
  {
    id: { type: String },
    name: { type: String },
    email: { type: String },
    age: { type: Number },
  },
  {
    versionKey: false,
  }
);

const produtos = mongoose.model("produtos", produtoSchema);

export default produtos;