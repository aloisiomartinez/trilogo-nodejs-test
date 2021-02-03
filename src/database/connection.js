const mongoose = require('mongoose');

mongoose.connect(
  'mongodb+srv://userChat:password12345@trilogochattest.nggxu.mongodb.net/trilogoChatDatabase?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
);

mongoose.connection.on('connected', () => {
  console.log('Mongo has connected succesfully');
});

mongoose.connection.on('error', (err) => {
  console.log(`Mongo Connection ERROR:${err.message}`);
});
