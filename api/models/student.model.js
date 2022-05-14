var mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: "Nome obrigatório",
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
  cpf: {
    type: "String",
    required: "Cpf obrigatório",
  },
  address: {
    type: "String",
    required: "Endereço obrigatória",
  },
  educationalLevel: {
    type: "String",
    required: "Escolaridade obrigatória",
  },
});

const Student = mongoose.model("Student", StudentSchema);

module.exports = Student;
