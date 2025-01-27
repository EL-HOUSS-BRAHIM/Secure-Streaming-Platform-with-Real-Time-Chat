const express = require('express');
const roomRoutes = require('./routes/roomRoutes');
const chatRoutes = require('./routes/chatRoutes');
const authMiddleware = require('./middlewares/authMiddleware');

const app = express();

// Middleware
app.use(express.json());
app.use(authMiddleware);

// Routes
app.use('/api/rooms', roomRoutes);
app.use('/api/chats', chatRoutes);

module.exports = app;