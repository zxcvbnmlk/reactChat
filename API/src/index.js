const express = require('express')
const app = express();

const http = require('http');


const index = http.Server(app);

const io = require("socket.io")(index, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"],
        allowedHeaders: ["my-custom-header"],
        credentials: true
    }
});
const port = process.env.PORT || 3000;
const msgs = [];
let users = [];
io.on('connection', (socket) => {
    socket.join("room1");
    socket.on('message', (message) => {
        const msg = {
            token: socket.handshake.query.token,
            username: socket.handshake.query.username,
            text: message,
            date: (new Date).toLocaleTimeString()
        }
        io.emit('message', msg);
        msgs.push(msg)
    });


    users = [];
    for (let [id, socket] of io.of("/").sockets) {
        if (!users.find(item => item.username === socket.handshake.query.username
        )) {
            users.push({
                userID: id,
                username: socket.handshake.query.username,
                token: socket.handshake.query.token
            });
        }
    }
    io.emit("messageAll", msgs);
    io.emit("users", users);


    socket.on('disconnect', () => {
        users = users.filter(item => item.token !== socket.handshake.query.token);
        io.emit("users", users);
    });

});

index.listen(port, () => {
    console.log(`started on port: ${port}`);
});


