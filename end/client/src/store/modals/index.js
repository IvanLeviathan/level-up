const initState = [];

const actionType = {
  SHOW_MODAL: 'SHOW_MODAL',
  HIDE_MODAL: 'HIDE_MODAL',
}

export const actionShowModal = (payload) => {
  return {
    type: actionType.SHOW_MODAL,
    payload
  }
}

export const actionHideModal = () => {
  return {
    type: actionType.HIDE_MODAL
  }
}

const reducer = (state = initState, {type, payload}) => {
  switch(type){
    case actionType.SHOW_MODAL:
      return [...state, payload]
    case actionType.HIDE_MODAL:
      state.splice(-1, 1);
      return [...state];
    default:
      return state;
  }
}

export default reducer;