import { applyMiddleware, compose, createStore } from "redux";
import { createStoreHook } from "react-redux";
import createDebounce from 'redux-debounced';
import thunk from 'redux-thunk';
import rootReducer from "./Reducers";

const middlewares=[thunk,createDebounce()];
const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store=createStore(
    rootReducer,
    {},
    composeEnhancers(applyMiddleware(...middlewares))
);

export {store};

