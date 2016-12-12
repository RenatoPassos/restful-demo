var mongoose = require('mongoose');

var EleitorSchema = new mongoose.Schema({
    titulo: Number
    , cpf: Number
    , nome: String
    , nome_mae: String
});

module.exports = mongoose.model('Eleitor', EleitorSchema );