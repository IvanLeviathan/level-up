
import request from "../../../utils/request";
import { handlerErrorLoadingTodo, handlerSuccessLoadingTodo, startLoadingTodo } from "../common";

export const deleteTodo = (payload, token) => async (dispatch) => {
    dispatch(startLoadingTodo());
    const response = await request('/api/todo/remove', 'DELETE', { ...payload }, {
        Authorisation: `Bearer ${token}`
    })
    console.log(response);
    if(response.success){
        dispatch(handlerSuccessLoadingTodo(response));
    }else
        dispatch(handlerErrorLoadingTodo(response));
}