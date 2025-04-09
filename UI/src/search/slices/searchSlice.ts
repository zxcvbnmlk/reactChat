import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {GitHubResponse, SearchRequest, SearchState} from "@src/search/models/search.ts";


const initialState: SearchState = {
    users: [],
    loading: false,
    error: null,
    total_count: 0,
};

const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        searchUsersRequest: (state, _action: PayloadAction<SearchRequest>) => {
            state.loading = true;
            state.error = null;
        },
        searchUsersSuccess: (state, action: PayloadAction<GitHubResponse>) => {
            state.loading = false;
            state.users = action.payload.items;
            state.total_count = action.payload.total_count;
        },
        searchUsersFailure: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
        },
        resetUsers(state) {
            state.users = [];
        },
    },
});

export const {
    searchUsersRequest,
    searchUsersSuccess,
    searchUsersFailure,
    resetUsers
} =  searchSlice.actions;
export const searchReducer = searchSlice.reducer;
