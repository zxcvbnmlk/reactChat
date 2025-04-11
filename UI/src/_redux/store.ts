import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import {searchReducer} from "@src/search/slices/searchSlice";
import watchSearchUsers from "@src/search/sagas/searchSaga";
import { all } from "redux-saga/effects";
import {chatReducer} from "@src/chat/slices/chatSlice.ts";
import {authReducer} from "@src/auth/slices/searchSlice.ts";
import {chatSaga} from "@src/chat/sagas/chatSaga.ts";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        auth: authReducer,
        search: searchReducer,
        chat: chatReducer,

    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware),
});

function* rootSaga() {
    yield all([
        watchSearchUsers(),
        chatSaga()
    ]);
}

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
