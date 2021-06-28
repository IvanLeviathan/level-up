import {combineReducers, createStore} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// import thunk from 'redux-thunk';
import categoryReducer from './category';
import taskReducer from './todos';
import modalsReducer from './modals';
// const middleware = [];

const rootReducer = combineReducers({
  task: taskReducer,
  category: categoryReducer,
  modalsReducer
})

export const configureStore = () => {
  const store = createStore(rootReducer, composeWithDevTools());
  return store;
}