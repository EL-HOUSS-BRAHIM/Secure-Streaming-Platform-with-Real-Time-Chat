import React, { useState } from 'react';

const ChatBox = () => {
    const [messages, setMessages] = useState([]);
    const [pinnedMessage, setPinnedMessage] = useState(null);

    const handlePinMessage = (message) => {
        setPinnedMessage(message);
    };

    const handleVote = (messageId, voteType) => {
        // Implement vote logic here
    };

    return (
        <div className="chat-box">
            <h2>Chat</h2>
            {pinnedMessage && <div className="pinned-message">{pinnedMessage}</div>}
            <div className="messages">
                {messages.map((message) => (
                    <div key={message.id} className="message">
                        <p>{message.text}</p>
                        <button onClick={() => handlePinMessage(message)}>Pin</button>
                        <button onClick={() => handleVote(message.id, 'upvote')}>Upvote</button>
                        <button onClick={() => handleVote(message.id, 'downvote')}>Downvote</button>
                    </div>
                ))}
            </div>
            <input type="text" placeholder="Type a message..." />
            <button>Send</button>
        </div>
    );
};

export default ChatBox;