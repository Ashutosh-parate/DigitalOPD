const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const dbConnect = require("./db");
const patientRoutes = require("./routes/PatientRoutes");
require("dotenv").config();

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

// Connect to the database
dbConnect();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/patients", patientRoutes);

// Socket.io for real-time chat
io.on("connection", (socket) => {
  console.log("User connected");
  socket.on("message", (message) => {
    io.emit("message", message);
  });
  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

// Start the server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
