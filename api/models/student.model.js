var mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StudentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: "Nome obrigatório",
  },
  parentName: {
    type: "String",
    required: "Pelo menos um nome de responsável deve ser informado",
  },
  parentTelephone: {
    type: "String",
    required: "Telefone do responsável deve ser informado",
  },
  age: {
    type: Number,
    required: "Idade obrigatória",
  },
  gender: {
    type: "String",
  },
  address: {
    type: "String",
    required: "Endereço obrigatória",
  },
  nationality: {
    type: "String",
    required: "Deve ser informado país de origem",
  },
  volunteer: {
    type: Schema.Types.ObjectId,
    ref: "Volunteer",
    unique: true,
  },
});

const Student = mongoose.model("Student", StudentSchema);

module.exports = Student;
