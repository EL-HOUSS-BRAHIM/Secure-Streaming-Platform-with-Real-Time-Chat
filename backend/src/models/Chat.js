class Chat {
    constructor(sender, message, timestamp) {
        this.sender = sender; // The user who sent the message
        this.message = message; // The content of the message
        this.timestamp = timestamp; // The time the message was sent
    }
}

module.exports = Chat;