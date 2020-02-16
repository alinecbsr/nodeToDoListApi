'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TasckSchema = new Schema({
 name: {
    type: String,
    required: 'Atividades para hoje'
  },

  created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['Pendente', 'Em andamento', 'Concluído']
    }],
    default: ['Pendente']
  }
});

module.exports = mongoose.model('Tasks', TasckSchema);
