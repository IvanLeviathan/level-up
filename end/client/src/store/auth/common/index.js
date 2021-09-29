const actionTypes = {
    AUTH_START_LOADING: 'AUTH_START_LOADING',
    AUTH_HANDLER_ERROR: 'AUTH_HANDLER_ERROR',
    AUTH_HANDLER_SUCCESS: 'AUTH_HANDLER_SUCCESS',
    CLEAR_ERROR: 'CLEAR_ERROR',
    CLEAR_SUCCESS: 'CLEAR_SUCCESS',
};

export const startLoadingAuth = () => ({ type: actionTypes.AUTH_START_LOADING });
export const handlerSuccessLoadingAuth = (payload) => ({ type: actionTypes.AUTH_HANDLER_SUCCESS, payload});
export const handlerErrorAuth = (payload) => ({ type: actionTypes.AUTH_HANDLER_ERROR, payload });
export const handlerClearError = () => ({ type: actionTypes.CLEAR_ERROR });
export const handlerClearSuccess = () => ({ type: actionTypes.CLEAR_SUCCESS })

export default function reducer(state, { type, payload }) {
    switch (type) {
        case actionTypes.AUTH_START_LOADING:
            return { ...state, isLoading: true, success: false }
        case actionTypes.AUTH_HANDLER_SUCCESS:
            return { ...state, isLoading: false, success: true, message: payload.message }
        case actionTypes.AUTH_HANDLER_ERROR:
            return { ...state, isLoading: false, success: false, message: payload.message }
        case actionTypes.CLEAR_ERROR:
            return { ...state, message: null }
        case actionTypes.CLEAR_SUCCESS:
                return { ...state, success: false }
        default:
            return state
    }
}