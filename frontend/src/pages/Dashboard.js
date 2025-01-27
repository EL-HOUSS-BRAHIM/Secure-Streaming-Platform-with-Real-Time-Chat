import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <h1>Dashboard</h1>
            <Link to="/create-room">Create Room</Link>
            <Link to="/rooms">View Rooms</Link>
        </div>
    );
};

export default Dashboard;