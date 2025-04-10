import { io, Socket } from 'socket.io-client';

const API_LOCAL = "http://localhost:3000/";


let socket: Socket;

export const connectSocket = (username: string, token: string): Socket => {
    socket = io(API_LOCAL, {
        query: { username, token },
    });
    return socket;
};

export const getSocket = (): Socket => {
    if (!socket) throw new Error("Socket is not initialized");
    return socket;
};

export const disconnectSocket = () => {
    if (socket) socket.disconnect();
};
