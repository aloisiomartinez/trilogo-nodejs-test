import mongoose from 'mongoose';
// const mongoose = require('mongoose');

mongoose.connect(
  'mongodb+srv://userChat:password12345@trilogochattest.nggxu.mongodb.net/trilogoChatDatabase?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true },
);

mongoose.connection.on('connected', () => {
  console.log('Mongo has connected succesfully');
});
