import { actionAddAlert } from "../../store/alerts"

export const addAlert = (dispatch, text, type) => {
  if(!text)
    return;
  dispatch(actionAddAlert({
    type: type,
    text: text,
    id: new Date().getTime()
  }))
}