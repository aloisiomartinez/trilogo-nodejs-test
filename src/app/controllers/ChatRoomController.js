const { v4: uuidv4 } = require('uuid');
const ChatRoom = require('../../models/ChatRoom');

exports.store = async (req, res) => {
  const { description, permaLink, userId } = req.body;

  if (!description) {
    return res.json({ message: 'Description is required.' });
  }

  const chatRoom = new ChatRoom({
    ticket_id: uuidv4(),
    description,
    permaLink,
    user: userId,
  });

  await chatRoom.save();

  return res.status(400).json({
    message: 'ChatRoom created',
    chatRoom,
  });
};

exports.getAllChatrooms = async (req, res) => {
  const chatRooms = await ChatRoom.find();

  if (!chatRooms) {
    return res.status(404).json({ error: 'There is no Chat Room created.' });
  }

  return res.status(200).json(chatRooms);
};

exports.getUsersFromChatRoom = async (req, res) => {
  const userId = req.params.id;

  const usersByChatRoom = await ChatRoom.findOne({ user: userId }).populate('User');

  if (!usersByChatRoom) {
    return res.status(404).json({ error: 'User not found in a Chat Room.' });
  }

  return res.status(200).json(usersByChatRoom);
};
