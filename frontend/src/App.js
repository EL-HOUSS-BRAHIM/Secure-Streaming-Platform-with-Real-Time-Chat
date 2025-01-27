import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Room from './pages/Room';
import CreateRoom from './pages/CreateRoom';
import ChatBox from './components/ChatBox';
import VideoPlayer from './components/VideoPlayer';

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/room" element={<Room />} />
                    <Route path="/create-room" element={<CreateRoom />} />
                </Routes>
                <ChatBox />
                <VideoPlayer />
            </div>
        </Router>
    );
}

export default App;