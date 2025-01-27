import React from 'react';

const VideoPlayer = ({ videoSrc, isAdmin, onPlay, onPause, onSkip, onRewind }) => {
    return (
        <div className="video-player">
            <video controls>
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            {isAdmin && (
                <div className="admin-controls">
                    <button onClick={onPlay}>Play</button>
                    <button onClick={onPause}>Pause</button>
                    <button onClick={onSkip}>Skip</button>
                    <button onClick={onRewind}>Rewind</button>
                </div>
            )}
        </div>
    );
};

export default VideoPlayer;