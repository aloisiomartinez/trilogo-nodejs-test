const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
  chatRoom: {
    type: mongoose.Schema.Types.String,
    required: true,
    ref: 'ChatRoom.ticket_id',
  },
  user: {
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
