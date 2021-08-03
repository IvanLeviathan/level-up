import {combineReducers, createStore} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import todosReducer from './todos';
import modalsReducer from './modals';

const rootReducer = combineReducers({
  todosReducer,
  modalsReducer
})

export const configureStore = () => {
  const store = createStore(rootReducer, composeWithDevTools());
  return store;
}