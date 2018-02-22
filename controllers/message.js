// Load required packages
var Message = require('../models/message');

// Create endpoint /api/Messages for POSTS
exports.postMessages = function(req, res) {
  // Create a new instance of the Message model
  var message = new Message();

  // Set the message properties that came from the POST data
  message.text = req.body.text;

  // Save the message and check for errors
  message.save(function(err) {
    if (err)
      res.send(err);

    res.json({ message: 'Message added to the locker!', data: message });
  });
};

// Create endpoint /api/Messages for GET
exports.getMessages = function(req, res) {
  // Use the Message model to find all message
  Message.find(function(err, Messages) {
    if (err)
      res.send(err);

    res.json(Messages);
  });
};

// Create endpoint /api/Messages/:message_id for GET
exports.getMessage = function(req, res) {
  // Use the Message model to find a specific message
  Message.findById(req.params.message_id, function(err, message) {
    if (err)
      res.send(err);

    res.json(message);
  });
};

// Create endpoint /api/Messages/:message_id for PUT
exports.putMessage = function(req, res) {
  // Use the Message model to find a specific message
  Message.findById(req.params.message_id, function(err, message) {
    if (err)
      res.send(err);

    // Update the existing message quantity
    message.text = req.body.text;

    // Save the message and check for errors
    message.save(function(err) {
      if (err)
        res.send(err);

      res.json(message);
    });
  });
};

// Create endpoint /api/Messages/:message_id for DELETE
exports.deleteMessage = function(req, res) {
  // Use the Message model to find a specific message and remove it
  Message.findByIdAndRemove(req.params.message_id, function(err) {
    if (err)
      res.send(err);

    res.json({ message: 'Message removed from the locker!' });
  });
};