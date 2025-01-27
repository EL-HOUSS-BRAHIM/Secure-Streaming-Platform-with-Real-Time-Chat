const Chat = require('../models/Chat');

// Function to send a message
const sendMessage = async (req, res) => {
    try {
        const { roomId, userId, message } = req.body;
        const chatMessage = new Chat({ roomId, userId, message });
        await chatMessage.save();
        res.status(201).json(chatMessage);
    } catch (error) {
        res.status(500).json({ message: 'Error sending message', error });
    }
};

// Function to get messages for a room
const getMessages = async (req, res) => {
    try {
        const { roomId } = req.params;
        const messages = await Chat.find({ roomId }).sort({ createdAt: -1 });
        res.status(200).json(messages);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving messages', error });
    }
};

module.exports = {
    sendMessage,
    getMessages,
};