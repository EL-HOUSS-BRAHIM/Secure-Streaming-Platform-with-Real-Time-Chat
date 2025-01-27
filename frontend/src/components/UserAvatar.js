import React from 'react';

const UserAvatar = ({ user }) => {
    return (
        <div className="user-avatar">
            <img src={user.avatarUrl} alt={`${user.name}'s avatar`} />
            <p>{user.name}</p>
        </div>
    );
};

export default UserAvatar;