var mongoose = require("mongoose");

const VolunteerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: "Nome obrigatório",
  },
  email: {
    type: String,
    unique: "Email já existe",
    required: "Email obrigatório",
  },
  age: {
    type: Number,
    required: "Idade obrigatória",
  },
  gender: {
    type: "String",
  },
  cpf: {
    type: "String",
    required: "Cpf obrigatório",
  },
  address: {
    type: "String",
    required: "Endereço obrigatório",
  },
  educationalLevel: {
    type: "String",
    required: "Escolaridade obrigatória",
  },
  phone: {
    type: "String",
    required: "Telefone obrigatório",
  },
});

const Volunteer = mongoose.model("Volunteer", VolunteerSchema);

module.exports = Volunteer;
