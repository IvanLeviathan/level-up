import request from "../../../utils/request"
import { handlerErrorAuth, handlerSuccessLoadingAuth, startLoadingAuth } from "../common";

const localStorageName = 'end-user';

const actionTypes = {
    SET_AUTH_USER: 'SET_AUTH_USER',
    CLEAR_AUTH_USER: 'CLEAR_AUTH_USER',
};

const setLocalStorageUser = (payload) => {
    localStorage.setItem(localStorageName, JSON.stringify(payload));
}

const setUser = (payload) => {
    // setLocalStorageUser(payload);
    return { type: actionTypes.SET_AUTH_USER, payload }
};
export const clearUser = () => ({ type: actionTypes.CLEAR_AUTH_USER });

export const authLogin = (payload) => async (dispatch) => {
    dispatch(startLoadingAuth());
    const response = await request('/api/auth/login', 'POST', {...payload});
    if(response.success){
        dispatch(handlerSuccessLoadingAuth(response));
        delete response.success;
        dispatch(setUser(response));
    }
    else
        dispatch(handlerErrorAuth(response));
}

export default function reducer(state, { type, payload }){
    switch (type) {
        case actionTypes.SET_AUTH_USER:
            return {...state, user: payload }
        case actionTypes.CLEAR_AUTH_USER:
            return {...state, user: null, error: null, success: false }
        default:
            return state;
    }
}