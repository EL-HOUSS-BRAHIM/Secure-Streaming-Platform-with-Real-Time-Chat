# backend/README.md

# Project Title

## Overview
This project is a full-stack application that includes a backend built with Node.js and Express, and a frontend built with React. The application allows users to create and manage chat rooms and send messages in real-time.

## Backend Setup

### Prerequisites
- Node.js
- MongoDB (or your preferred database)

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the backend directory:
   ```
   cd backend
   ```
3. Install dependencies:
   ```
   npm install
   ```

### Environment Variables
Create a `.env` file in the backend directory and add the following variables:
```
DATABASE_URL=<your-database-url>
PORT=5000
```

### Running the Server
To start the backend server, run:
```
npm start
```
The server will be running on `http://localhost:5000`.

## API Endpoints

### Rooms
- **POST /api/rooms**: Create a new room
- **GET /api/rooms/:id**: Get room details
- **DELETE /api/rooms/:id**: Delete a room

### Chat
- **POST /api/chat**: Send a message
- **GET /api/chat/:roomId**: Get messages for a room

## License
This project is licensed under the MIT License.