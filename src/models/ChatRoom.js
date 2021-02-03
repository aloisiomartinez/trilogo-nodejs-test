const mongoose = require('mongoose');

const ChatRoomSchema = new mongoose.Schema({
  ticket_id: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  permaLink: {
    type: String,
  },
}, {
  timestamps: true,
});

const ChatRoom = mongoose.model('ChatRoom', ChatRoomSchema);

module.exports = ChatRoom;
