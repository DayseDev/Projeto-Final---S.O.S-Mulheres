const mongoose = require("mongoose");

const oficinaSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        default: mongoose.Types.ObjectId,
    },

    razaoSocial: { type: String, required: true },
    nomeFantasia: { type: String, required: true },
    cidade: { type: String, required: true },
    numeroTelefone: { type: Number, required: true },
});


const oficinas = mongoose.model('oficinas', oficinaSchema);

module.exports = oficinas;