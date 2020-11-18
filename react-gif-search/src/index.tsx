import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import createSagaMiddleware from "redux-saga"
import {applyMiddleware, createStore} from "redux"
import gifReducer from './ducks/gif_reducer';
import watchGetAllGifs from './sagas/gif_saga';
import {Provider} from "react-redux"


const sagaMiddleware = createSagaMiddleware();
const store = createStore(gifReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(watchGetAllGifs)

ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
