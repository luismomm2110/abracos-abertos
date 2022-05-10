import mongoose from "mongoose";

const VolunteerSchema = new mongoose.schema({
  name: {
    type: String,
    required: "Name obrigatório",
  },
  email: {
    type: String,
    unique: "Email já existe",
  },
  age: {
    type: Number,
    required: "Idade obrigatória",
  },
  gender: {
    type: "String",
  },
  CPF: {
    type: "String",
    required: "Cpf obrigatório",
  },
  endereço: {
    type: "String",
    required: "Endereço obrigatória",
  },
  escolaridade: {
    type: "String",
    required: "Escolaridade obrigatória",
  },
});

module.export = mongoose.model("Volunteer", VolunteerSchema);
