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
  const usersByChatRoom = await ChatRoom.find();

  if (!usersByChatRoom) {
    return res.status(404).json({ error: 'There is no Chat Room created.' });
  }

  return res.status(200).json(usersByChatRoom);
};
