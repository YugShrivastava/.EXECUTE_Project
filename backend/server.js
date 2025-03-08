const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const eventRouter = require("./routes/eventRoute");
const router = require("./routes/userRoute");
const Auth = require("./routes/authRoute");


const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

app.use(cors({
    origin: "*",
    methods: ['GET','POST', 'DELETE', 'PUT']
}));
app.use(express.json());
app.use("/api/events", eventRouter);
app.use("/api/users", router)
app.use("/api/auth", Auth)


app.get("/", (req, res) => {
    res.send({ message: "Server is running!" });
});

io.on("connection", (socket) => {
    console.log(`User Connected: ${socket.id}`);
    
    socket.on("disconnect", () => {
        console.log(`User Disconnected: ${socket.id}`);
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});