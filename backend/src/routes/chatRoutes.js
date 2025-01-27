const express = require('express');
const chatController = require('../controllers/chatController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

// Route to send a message
router.post('/messages', authMiddleware, chatController.sendMessage);

// Route to get messages
router.get('/messages/:roomId', authMiddleware, chatController.getMessages);

module.exports = router;