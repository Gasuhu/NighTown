const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const cors = require('cors')
const app = express();
const server = http.createServer(app);
const io = socketIO(server, {cors: {
    origin: "*"
  }});

// Serve the HTML file
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Handle socket connections
io.on('connection', (socket) => {
  console.log('A user connected');


  // Handle chat messages
  socket.on('chat message', (message) => {
    console.log(message)
    io.emit('chat message', message); // Broadcast the message to all connected clients
  });

  // Handle user disconnection
  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

const port = process.env.PORT || 3001;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});