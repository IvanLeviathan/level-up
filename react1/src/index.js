import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {HashRouter} from "react-router-dom"
import { Provider } from 'react-redux';
// import { createStore, compose, applyMiddleware } from 'redux';
import {configureStore} from './store';

// const store = createStore(
//   rootReducer,
//   applyMiddleware(thunk),
//   compose(
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   )
// )

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <HashRouter basename="/">
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
