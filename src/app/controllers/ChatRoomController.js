const { v4: uuidv4 } = require('uuid');
const ChatRoom = require('../../models/ChatRoom');

exports.store = async (req, res) => {
  const { description, permaLink } = req.body;

  if (!description) {
    return res.json({ message: 'Description is required.' });
  }

  const chatRoom = new ChatRoom({
    ticket_id: uuidv4(),
    description,
    permaLink,
  });

  await chatRoom.save();

  return res.status(400).json({
    message: 'ChatRoom created',
    chatRoom,
    permaLink,
  });
};

exports.getAllChatrooms = async (req, res) => {
  const chatrooms = await ChatRoom.find();

  res.json(chatrooms);
};
