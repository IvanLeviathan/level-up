import request from "../../../utils/request"
import { handlerErrorAuth, handlerSuccessLoadingAuth, startLoadingAuth } from "../common";


const actionTypes = {
    SET_AUTH_USER: 'SET_AUTH_USER',
    CLEAR_AUTH_USER: 'CLEAR_AUTH_USER',
    SET_USER_INFO: 'SET_USER_INFO'
};

const setUser = (payload) => {
    return { type: actionTypes.SET_AUTH_USER, payload }
};
export const clearUser = () => ({ type: actionTypes.CLEAR_AUTH_USER });

const setUserInfo = (payload) => {
    return {type: actionTypes.SET_USER_INFO, payload}
}

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


export const authGetUserInfo = (userId) => async (dispatch) => {
    dispatch(startLoadingAuth());
    const response = await request('/api/auth/getuser', 'POST', {userId});
    if(response.success){
        dispatch(handlerSuccessLoadingAuth(response));
        delete response.success;
        dispatch(setUserInfo(response));
    }else
        dispatch(handlerErrorAuth(response));
}

export const updateUser = (payload, token) => async (dispatch) => {
    dispatch(startLoadingAuth());
    const response = await request('/api/auth/updateuser', 'POST', {...payload}, {
        Authorisation: `Bearer ${token}`
    });
    if(response.success){
        dispatch(authGetUserInfo(payload.id));
        dispatch(handlerSuccessLoadingAuth(response));
    }else
        dispatch(handlerErrorAuth(response));
}

export default function reducer(state, { type, payload }){
    switch (type) {
        case actionTypes.SET_AUTH_USER:
            return {...state, user: payload }
        case actionTypes.CLEAR_AUTH_USER:
            return {...state, user: null, error: null, success: false }
        case actionTypes.SET_USER_INFO:
            return {...state, userInfo: payload}
        default:
            return state;
    }
}