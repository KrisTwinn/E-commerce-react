import { createStore, applyMiddleware } from "redux"
import rootReducer from "./root.reducer";
import logger from "redux-logger";
import { thunk } from "redux-thunk";
import { persistStore } from "redux-persist";
import createSagaMiddleware from '@redux-saga/core'
import rootSaga
 from "./root.saga";
const sagaMiddleware = createSagaMiddleware();

const middllewares = {
    logger,
    thunk,
    sagaMiddleware
}

export const store = createStore(rootReducer, applyMiddleware(...middllewares));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
