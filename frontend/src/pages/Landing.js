import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <div className="container">
            <h1>Welcome to Secure Streaming Platform</h1>
            <p>Join us for a secure and interactive streaming experience.</p>
            <Link to="/login">Login</Link>
        </div>
    );
};

export default Landing;