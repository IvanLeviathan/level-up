import request from "../../../utils/request";
import { handlerErrorLoadingTodo, handlerSuccessLoadingTodo, startLoadingTodo } from "../common";

export const updateTodo = (payload, token) => async (dispatch) => {
  dispatch(startLoadingTodo());
  const response = await request('/api/todo/update', 'POST', { ...payload }, {
    Authorisation: `Bearer ${token}`
  });
  if(response.success){
    dispatch(handlerSuccessLoadingTodo(response));
  }else
    dispatch(handlerErrorLoadingTodo(response));
}