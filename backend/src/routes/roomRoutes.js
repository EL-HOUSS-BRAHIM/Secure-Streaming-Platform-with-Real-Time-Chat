const express = require('express');
const router = express.Router();
const roomController = require('../controllers/roomController');
const authMiddleware = require('../middlewares/authMiddleware');

// Route to create a new room
router.post('/', authMiddleware, roomController.createRoom);

// Route to get a specific room by ID
router.get('/:id', roomController.getRoom);

// Route to delete a room by ID
router.delete('/:id', authMiddleware, roomController.deleteRoom);

module.exports = router;