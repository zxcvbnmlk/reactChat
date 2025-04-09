import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import {searchReducer} from "@src/search/slices/searchSlice.ts";
import watchSearchUsers from "@src/search/sagas/searchSaga";
import { all } from "redux-saga/effects";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        search: searchReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware),
});

function* rootSaga() {
    console.log('rootSaga()')
    yield all([watchSearchUsers()]);
}

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
