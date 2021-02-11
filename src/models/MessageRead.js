import mongoose from 'mongoose';

const MessageReadSchema = new mongoose.Schema(
  {
    _id: false,
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    readAt: {
      type: Date,
      default: Date.now(),
    },
  },
);

const MessageRead = mongoose.model('MessageRead', MessageReadSchema);

module.exports = MessageRead;
