import mongoose from "mongoose";

const clienteSchema = new mongoose.Schema(
  {
    id: { type: String },
    name: { type: String, required: true },
    cpf: { type: String, required: true },
    email: { type: String, required: true},
    password: { type: String, required: true },
  },
  {
    versionKey: false,
  }
);

const clientes = mongoose.model("clientes", clienteSchema);

export default clientes;
