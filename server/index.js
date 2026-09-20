try {
  if (typeof process.loadEnvFile === "function") {
    process.loadEnvFile();
  }
} catch {
  // no .env file present (e.g. in production, where env vars are set by the host)
}

const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const cors = require('cors')
const app = express();
const passportSetup=require("./passport")
const cookieSession= require("cookie-session")
const passport = require("passport");
const authRoute=require("./routes/auth")

if (!process.env.SESSION_SECRET) {
  throw new Error("Missing SESSION_SECRET environment variable");
}

app.use(cookieSession(
  {
    name:"session",
    keys:[process.env.SESSION_SECRET],
    maxAge:3*24*60*60*1000,
  }
))

app.use(passport.initialize())
app.use(passport.session())
app.use(cors({
  origin:"https://nightown.onrender.com",
  methods:"GET,POST,PUT,DELETE",
  credentials:true,
}))

app.use("/auth",authRoute)
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