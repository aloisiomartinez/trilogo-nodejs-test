const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
  chatRoom_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    index: true,
    ref: 'ChatRoom',
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  message: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

const Message = mongoose.model('Message', MessageSchema);

module.exports = Message;
