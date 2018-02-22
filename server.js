// Load required packages
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var messageController = require('./controllers/message');

var RateLimit = require('express-rate-limit');

// Connect to the messagelocker MongoDB
mongoose.connect('mongodb://localhost:27017/messagelocker');

var apiLimiter = new RateLimit({
    windowMs: 15*60*1000, // 15 minutes
    max: 100,
    delayMs: 0 // disabled
  });
   

// Create our Express application
var app = express();

// Use the body-parser package in our application
app.use(bodyParser.urlencoded({
  extended: true
}));

// Create our Express router
var router = express.Router();

// Create endpoint handlers for /messages
router.route('/messages')
  .post(messageController.postMessages)
  .get(messageController.getMessages);

// Create endpoint handlers for /messages/:message_id
router.route('/messages/:message_id')
  .get(messageController.getMessage)
  .put(messageController.putMessage)
  .delete(messageController.deleteMessage);

// Register all our routes with /api
app.use('/api', router);

// only apply to requests that begin with /api/
//app.use('/api/', apiLimiter);


// Start the server
app.listen(3000);