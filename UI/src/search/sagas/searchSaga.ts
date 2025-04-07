import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { searchUsersRequest, searchUsersSuccess, searchUsersFailure } from "../slices/searchSlice.ts";
import {SearchUsersAction, GitHubResponse} from "@src/search/models/search.ts"

const API_GITHUB = "https://api.github.com/search/users";

function* fetchGitHubUsers(action: SearchUsersAction) {
    try {
        const response: GitHubResponse = yield call(() =>
            axios.get(`${API_GITHUB}?q=${action.payload.q}&page=${action.payload.page}`)
        );
        yield put(searchUsersSuccess(response.data.items));
    } catch (error: any) {
        yield put(searchUsersFailure(error.message));
    }
}


export default function* watchSearchUsers() {
    yield takeLatest(searchUsersRequest.type, fetchGitHubUsers);
}
