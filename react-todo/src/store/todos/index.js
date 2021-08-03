const storageName = 'todos';

const initState = {todos: localStorage.getItem(storageName) ? JSON.parse(localStorage.getItem(storageName)) : []};

const actionType = {
  ADD_TODO: 'ADD_TODO',
  DELETE_TODO: 'DELETE_TODO',
  EDIT_TODO: 'EDIT_TODO',
  SAVE_TODOS: 'SAVE_TODOS',
  DELETE_TODOS: 'DELETE_TODOS',
}

export const actionCreateTodo = (payload) => {
  return {
    type: actionType.ADD_TODO,
    payload
  }
}

export const actionEditTodo = (payload) => {
  return{
    type: actionType.EDIT_TODO,
    payload
  }
}

export const actionDeleteTodo = (payload) => {
  return {
    type: actionType.DELETE_TODO,
    payload
  }
}

export const actionSaveTodos = () => {
  return {
    type: actionType.SAVE_TODOS
  }
}

export const actionDeleteTodos = () => {
  return {
    type: actionType.DELETE_TODOS
  }
}

const todosReducer = (state = initState, action) => {
  let todos;
  switch (action.type){
    case actionType.ADD_TODO:
      todos = {...state, todos: [...state.todos, action.payload]};
      return todos;
    case actionType.EDIT_TODO:
      todos = {...state, todos: state.todos.map((todo) => todo.id === action.payload.id ? {...todo, title: action.payload.title, id: action.payload.id, description: action.payload.description} : todo)};
      return todos;
    case actionType.DELETE_TODO:
      todos = {...state, todos: state.todos.filter((todo) => todo.id !== action.payload.id)};
      localStorage.setItem(storageName, JSON.stringify(todos.todos));
      return todos;
    case actionType.SAVE_TODOS:
      localStorage.setItem(storageName, JSON.stringify(state.todos));
      return state;
    case actionType.DELETE_TODOS:
      localStorage.setItem(storageName, JSON.stringify([]));
      todos = {...state, todos: []};
      return todos;
    default:
      return state;
  }
}

export default todosReducer;