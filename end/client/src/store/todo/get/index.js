import request from "../../../utils/request";
import { handlerErrorLoadingTodo, handlerSuccessLoadingTodo, startLoadingTodo } from "../common";

const actionTypes = {
    SET_TODOS: 'SET_TODOS',
    SET_CURRENT_TODO: 'SET_CURRENT_TODO'
};

export const actionSetTodos = (payload) => ({ type: actionTypes.SET_TODOS, payload });

export const actionSetCurrentTodo = (payload) => ({type: actionTypes.SET_CURRENT_TODO, payload});


export const getAllTodos = (token) => async (dispatch) => {
    dispatch(startLoadingTodo());
    const response = await request('/api/todo/all', 'GET', null, {
        Authorisation: `Bearer ${token}`
    });
    if(response.success){
        delete response.success;
        dispatch(actionSetTodos(response));
    }else
        dispatch(handlerErrorLoadingTodo(response));
};

export const getTodo = (token, todoId) => async (dispatch) => {
    dispatch(startLoadingTodo());
    const response = await request('/api/todo/get', 'POST', { todoId: todoId }, {
        Authorisation: `Bearer ${token}`
    });
    if(response.success){
        delete response.success;
        dispatch(handlerSuccessLoadingTodo(response));
        dispatch(actionSetCurrentTodo(response));
    }else
        dispatch(handlerErrorLoadingTodo(response));
    
    
}

export default function reducer(state, { type, payload }) {
    switch (type) {
        case actionTypes.SET_TODOS:
            return { ...state, todos: [...payload]}
        case actionTypes.SET_CURRENT_TODO:
            return {...state, currentTodo: payload}
        default:
            return state;
    }
}