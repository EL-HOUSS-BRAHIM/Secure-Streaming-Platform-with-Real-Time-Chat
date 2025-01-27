const RoomCard = ({ room, userRole }) => {
    return (
        <div className="room-card">
            <h2>{room.name}</h2>
            <p>{room.description}</p>
            <p>Participants: {room.participants}</p>
            {userRole === 'admin' && <button>Manage Room</button>}
            <button>Join Room</button>
        </div>
    );
};

export default RoomCard;