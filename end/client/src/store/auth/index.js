import reducerReducers from 'reduce-reducers';
import commonReducer from './common/index';
import loginReducer from './login/index';

export * from './registration/index';

export default reducerReducers({
    user: null,
    isLoading: false,
    message: null,
    success: false,
    userInfo: null
}, 
commonReducer, 
loginReducer )