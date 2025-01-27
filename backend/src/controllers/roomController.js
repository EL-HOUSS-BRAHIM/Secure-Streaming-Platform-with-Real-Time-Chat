const Room = require('../models/Room');

// Create a new room
exports.createRoom = async (req, res) => {
    try {
        const roomData = req.body;
        const newRoom = new Room(roomData);
        await newRoom.save();
        res.status(201).json(newRoom);
    } catch (error) {
        res.status(500).json({ message: 'Error creating room', error });
    }
};

// Get a room by ID
exports.getRoom = async (req, res) => {
    try {
        const roomId = req.params.id;
        const room = await Room.findById(roomId);
        if (!room) {
            return res.status(404).json({ message: 'Room not found' });
        }
        res.status(200).json(room);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching room', error });
    }
};

// Delete a room by ID
exports.deleteRoom = async (req, res) => {
    try {
        const roomId = req.params.id;
        const deletedRoom = await Room.findByIdAndDelete(roomId);
        if (!deletedRoom) {
            return res.status(404).json({ message: 'Room not found' });
        }
        res.status(200).json({ message: 'Room deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting room', error });
    }
};