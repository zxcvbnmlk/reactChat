import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
// import { searchUsersRequest, searchUsersSuccess, searchUsersFailure } from "../slices/chatSlice.ts";
// import {SearchUsersAction, GitHubResponse} from "@src/search/models/search.ts"
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


// function* fetchGitHubUsers(action: SearchUsersAction) {
//     try {
//         const response: GitHubResponse = yield call(() =>
//             axios.get(`${API_LOCAL}?q=${action.payload.q}&page=${action.payload.page}`)
//         );
//         yield put(searchUsersSuccess(response.data.items));
//     } catch (error: any) {
//         yield put(searchUsersFailure(error.message));
//     }
// }


export default function* watchSearchUsers() {
    yield takeLatest(searchUsersRequest.type, fetchGitHubUsers);
}
