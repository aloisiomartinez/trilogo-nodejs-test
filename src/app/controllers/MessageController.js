const { v4: uuidv4 } = require('uuid');
const Message = require('../../models/Message');

exports.getMessageByRoom = async (req, res) => {
  const chatRoomId = req.params.id;

  const messages = await Message.findById({ chatRoomId });
  console.log('messageeee', messages);
  if (!messages) {
    return res.status(404).json({ error: 'Mensagem não encontrada' });
  }

  res.json(messages);
};

exports.test = async (req, res) => {
  res.json({ message: 'oi' });
};
