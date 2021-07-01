const storageName = 'react-categories';

const initState = {category: localStorage.getItem(storageName) ? JSON.parse(localStorage.getItem(storageName)) : []};


const actionType = {
  ADD_CAT: 'ADD_CAT',
  DELETE_CAT: 'DEL_CAT',
  CHECK_CAT: 'CHECK_CAT',
  DELETE_ALL_CATEGORIES: 'DELETE_ALL_CATEGORIES',
  EDIT_CAT: 'EDIT_CAT'
  // SET_TODOS: 'SET_TODOS'
}

export const actionCreateCategory = (payload) => {
  return {
    type: actionType.ADD_CAT,
    payload
  }
}
export const actionDelCategory = (payload) => {
  return {
    type: actionType.DELETE_CAT,
    payload
  }
}

export const actionCheckCategory = (checked, id) => {
  return {
    type: actionType.CHECK_CAT,
    checked,
    id
  }
}

export const actionDeleteAllCategories = () => {
  return {
    type: actionType.DELETE_ALL_CATEGORIES
  }
};

export const actionEditCategory = (payload) => {
  return{
    type: actionType.EDIT_CAT,
    payload
  }
}

const updateCategories = (cats) => {
  localStorage.setItem(storageName, JSON.stringify(cats));
}




const categoryReducer = (state = initState, action = false) => {
  let categories;
  switch (action.type){
    case actionType.ADD_CAT:
      categories = {...state, category: [...state.category, action.payload]};
      updateCategories(categories.category);
      return categories;
    case actionType.DELETE_CAT:
      categories = {...state, category: state.category.filter((cat) => {
        if(cat.id !== action.payload)
          return cat;
        else
          return false;
      })};
      updateCategories(categories.category);
      return categories;
    case actionType.CHECK_CAT:
      categories = {...state, category: state.category.map((cat) => {
        if(cat.id === action.id)
          cat.checked = action.checked
        return cat;
      })};
      updateCategories(categories.category);
      return categories;
    case actionType.DELETE_ALL_CATEGORIES:
      categories = {...state, category: []};
      updateCategories(categories.category);
      return categories;
    case actionType.EDIT_CAT:
      categories = {...state, category: state.category.map((item) => item.id === action.payload.taskId ? {...item, title: action.payload.title, todoID: action.payload.todoId} : item)};
      updateCategories(categories.category);
      return categories;
    default:
      return state;
  }
}



export default categoryReducer;