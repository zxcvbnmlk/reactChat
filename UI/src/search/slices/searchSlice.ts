import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {SearchRequest, SearchState} from "@src/search/models/search.ts";
import {User} from "@src/_models/user.ts";

const initialState: SearchState = {
    users: [],
    loading: false,
    error: null,
};

const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        searchUsersRequest: (state, _action: PayloadAction<SearchRequest>) => {
            state.loading = true;
            state.error = null;
        },
        searchUsersSuccess: (state, action: PayloadAction<User[]>) => {
            state.loading = false;
            state.users = action.payload;
        },
        searchUsersFailure: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { searchUsersRequest, searchUsersSuccess, searchUsersFailure } =  searchSlice.actions;
export default searchSlice.reducer  ;
