import request from "../../../utils/request";
import { handlerErrorAuth, handlerSuccessLoadingAuth, startLoadingAuth } from "../common"

export const authRegistration = (payload) => async (dispatch) => {
    dispatch(startLoadingAuth());
    const response = await request('/api/auth/registration', 'POST', {...payload});
    if(response.success)
        dispatch(handlerSuccessLoadingAuth(response));
    else
        dispatch(handlerErrorAuth(response));
}