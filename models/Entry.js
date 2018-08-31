const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const entrySchema = new Schema({
  originalWord: { 
    type: String, 
    required: true,
    trim: true,
    minlength: 1
  },
  convertedWord: { 
    type: String, 
    required: true,
    trim: true,
    minlength: 1
  },
});

const Entry = mongoose.model('Entry', entrySchema);
module.exports = Entry;
