import React from 'react';

const Login = () => {
    const handleGoogleLogin = () => {
        window.location.href = 'http://localhost:5000/auth/google'; // Adjust the URL as needed
    };

    return (
        <div>
            <h1>Login</h1>
            <button onClick={handleGoogleLogin}>Login with Google</button>
        </div>
    );
};

export default Login;