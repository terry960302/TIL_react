import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducer from './store/reducers';
import sagas from './sagas/sagas';
import { Provider } from 'react-redux';


const sagaMiddleware = createSagaMiddleware();
export type RootState = ReturnType<typeof reducer>

export const store = createStore(reducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(sagas)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

