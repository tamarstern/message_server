// Load required packages
var mongoose = require('mongoose');
var Message = require('./message');
var Schema = mongoose.Schema;

// Define our Message schema
var MessagePartSchema   = new mongoose.Schema({
  text: String,
  message: { type: Schema.Types.ObjectId, ref: 'Message' }
});

// Export the Mongoose model
module.exports = mongoose.model('MessagePart', MessagePartSchema);