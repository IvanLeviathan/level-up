const actionTypes = {
  AUTH_START_LOADING: 'AUTH_START_LOADING',
  AUTH_HANDLER_ERROR: 'AUTH_HANDLER_ERROR',
  AUTH_HANDLER_SUCCESS: 'AUTH_HANDLER_SUCCESS',
}

export default function reducer(state, { type, payload}){
  switch (type) {
    case payload:
      
      return ;
  
    default:
      return state;
  }
}