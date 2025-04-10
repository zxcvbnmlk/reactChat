import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {credentials} from "@src/auth/models/auth.ts";



const initialState: credentials = {
    username: '',
    token: '',
    isLoading: true,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        authRequest: (state, _action: PayloadAction<credentials>) => {
            state.username = _action.payload.username;
            state.token = _action.payload.token;
            state.isLoading = false;
        },
        logout: (state) => {
            localStorage.removeItem("credentials")
            state.username ='';
            state.token ='';
        },
        finishLoading: (state) => {
            state.isLoading = false;
        }
    }
});

export const {
    authRequest,
    logout,
    finishLoading
} =  authSlice.actions;
export const authReducer = authSlice.reducer;
