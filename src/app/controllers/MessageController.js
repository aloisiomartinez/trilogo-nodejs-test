const Message = require('../../models/Message');

exports.getMessageByRoom = async (req, res) => {
  const chatRoomId = req.params.id;

  const messages = await Message.find({ chatRoom: chatRoomId });

  if (!messages) {
    return res.status(404).json({ error: 'This room has no saved messages' });
  }

  return res.status(200).json(messages);
};
