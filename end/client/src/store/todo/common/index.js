const actionTypes = {
    TODO_START_LOADING: 'TODO_START_LOADING',
    TODO_HANDLER_ERROR: 'TODO_HANDLER_ERROR',
    TODO_HANDLER_SUCCESS: 'TODO_HANDLER_SUCCESS'
};

export const startLoadingTodo = () => ({ type: actionTypes.TODO_START_LOADING });
export const handlerErrorLoadingTodo = (payload) => ({ type: actionTypes.TODO_HANDLER_ERROR, payload });
export const handlerSuccessLoadingTodo = (payload) => ({ type: actionTypes.TODO_HANDLER_SUCCESS, payload });

export default function reducer(state, { type, payload }) {
    switch (type) {
        case actionTypes.TODO_START_LOADING:
            return { ...state, success: false, isLoading: true, message: '' }
        case actionTypes.TODO_HANDLER_ERROR:
            return { ...state, success: false, message: payload.message, isLoading: false }
        case actionTypes.TODO_HANDLER_SUCCESS:
            return { ...state, success: true, message: payload.message, isLoading: false  }
        default:
            return state
    }
};
