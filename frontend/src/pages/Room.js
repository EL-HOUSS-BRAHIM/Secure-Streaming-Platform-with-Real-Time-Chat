import React from 'react';
import RoomCard from '../components/RoomCard';
import ChatBox from '../components/ChatBox';

const Room = () => {
    return (
        <div>
            <h1>Room Details</h1>
            <RoomCard />
            <ChatBox />
        </div>
    );
};

export default Room;