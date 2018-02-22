// Load required packages
var mongoose = require('mongoose');

// Define our Message schema
var MessageSchema   = new mongoose.Schema({
  text: String
});

// Export the Mongoose model
module.exports = mongoose.model('Message', MessageSchema);