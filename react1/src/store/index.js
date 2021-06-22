import {applyMiddleware, combineReducers, createStore} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import taskReducer from './todos';

const middleware = [];

const rootReducer = combineReducers({
  task: taskReducer
})

export const configureStore = () => {
  const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, ...middleware)));
  return store;
}