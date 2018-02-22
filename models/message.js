// Load required packages
var mongoose = require('mongoose');
var MessagePart = require('./messagePart');
var Schema = mongoose.Schema;

// Define our Message schema
var MessageSchema   = new mongoose.Schema({
  text: String,
  parts: [{ type: Schema.Types.ObjectId, ref: 'MessagePart' }]
});

// Export the Mongoose model
module.exports = mongoose.model('Message', MessageSchema);