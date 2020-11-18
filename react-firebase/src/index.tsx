import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux"
import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, createStore } from 'redux';
import { rootReducer } from './store/root_reducer';
import { rootSaga } from './store/sagas';
import postReducer from './store/ducks/post';
import { watchGetAllPosts } from './store/sagas/post_saga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(postReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)


ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
