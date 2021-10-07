import reducerReducer from 'reduce-reducers';
import commonReducer from './common/index';
import reducerTodo from './get';

export * from './create/index';
export * from './get/index';
export * from './delete/index';
export * from './update/index';

export default reducerReducer({
    todos: [],
    currentTodo: {},
    isLoading: false,
    message: null,
    success: false
}, 
reducerTodo,
commonReducer)