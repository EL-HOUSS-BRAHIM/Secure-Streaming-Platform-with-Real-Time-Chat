import React, { useState } from 'react';
import { createRoom } from '../services/api';

const CreateRoom = () => {
    const [roomName, setRoomName] = useState('');
    const [error, setError] = useState('');

    const handleCreateRoom = async (e) => {
        e.preventDefault();
        if (!roomName) {
            setError('Room name is required');
            return;
        }
        try {
            await createRoom({ name: roomName });
            setRoomName('');
            setError('');
            // Optionally redirect or show success message
        } catch (err) {
            setError('Failed to create room');
        }
    };

    return (
        <div>
            <h1>Create Room</h1>
            <form onSubmit={handleCreateRoom}>
                <input
                    type="text"
                    value={roomName}
                    onChange={(e) => setRoomName(e.target.value)}
                    placeholder="Enter room name"
                />
                <button type="submit">Create</button>
            </form>
            {error && <p>{error}</p>}
        </div>
    );
};

export default CreateRoom;