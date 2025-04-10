import { call, put, take, takeLatest } from "redux-saga/effects";
import {
    addMessage,
    connectSocket,
    disconnectSocket,
    sendMessage,
    setUsers,
    setAllMessages,
} from "@src/chat/slices/chatSlice";
import { connectSocket as socketInit, getSocket, disconnectSocket as disconnect } from "@src/chat/services/socket";
import { eventChannel } from "redux-saga";

function* handleConnect() {
    const credentials = JSON.parse(localStorage.getItem("credentials") || "{}");
    const socket = yield call(socketInit, credentials.username, credentials.token);

    const channel = eventChannel(emitter => {
        socket.on("users", (users) => emitter({ type: "users", payload: users }));
        socket.on("message", (message) => emitter({ type: "message", payload: message }));
        socket.on("messageAll", (messages) => emitter({ type: "all", payload: messages }));
        return () => socket.off();
    });

    while (true) {
        const { type, payload } = yield take(channel);
        if (type === "users") yield put(setUsers(payload));
        if (type === "message") yield put(addMessage(payload));
        if (type === "all") yield put(setAllMessages(payload));
    }
}

function* handleSendMessage(action: ReturnType<typeof sendMessage>) {
    const socket = getSocket();
    socket.emit("message", action.payload);
}

function* handleDisconnect() {
    yield call(disconnect);
}

export function* chatSaga() {
    yield takeLatest(connectSocket.type, handleConnect);
    yield takeLatest(sendMessage.type, handleSendMessage);
    yield takeLatest(disconnectSocket.type, handleDisconnect);
}
