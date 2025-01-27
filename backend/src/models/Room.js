class Room {
    constructor(name, capacity) {
        this.name = name;
        this.capacity = capacity;
        this.createdAt = new Date();
    }

    // Method to get room details
    getDetails() {
        return {
            name: this.name,
            capacity: this.capacity,
            createdAt: this.createdAt,
        };
    }
}

module.exports = Room;