import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createStore, applyMiddleware } from "redux";
import {Provider} from "react-redux";
import createSagaMiddleware from 'redux-saga';
import { helloSaga } from './sagas'
import {reducer} from "./store/reducer";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(helloSaga); // redux-saga не реализована :(


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>
);


