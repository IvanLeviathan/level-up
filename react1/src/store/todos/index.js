const storageName = 'react-tasks';

const initState = {task: localStorage.getItem(storageName) ? JSON.parse(localStorage.getItem(storageName)) : []};


const actionType = {
  ADD_TASK: 'ADD_TASK',
  DEL_TASK: 'DEL_TASK',
  CHECK_TASK: 'CHECK_TASK',
  DELETE_ALL_TASKS: 'DELETE_ALL_TASKS',
  EDIT_TASK: 'EDIT_TASK'
  // SET_TODOS: 'SET_TODOS'
}

export const actionCreateTodo = (payload) => {
  return {
    type: actionType.ADD_TASK,
    payload
  }
}
export const actionDelTodo = (payload) => {
  return {
    type: actionType.DEL_TASK,
    payload
  }
}

export const actionCheckTodo = (checked, id) => {
  return {
    type: actionType.CHECK_TASK,
    checked,
    id
  }
}

export const actionDeleteAllTasks = () => {
  return {
    type: actionType.DELETE_ALL_TASKS
  }
}

export const actionEditTask = (payload) => {
  return {
    type: actionType.EDIT_TASK,
    payload
  }
}

const updateTasks = (tasks) => {
  localStorage.setItem(storageName, JSON.stringify(tasks));
}


// const actionSetTodos = (payload) => {
//   console.log(payload);
//   return {
//     type: actionType.SET_TODOS,
//     payload
//   }
// }

const taskReducer = (state = initState, action) => {
  let tasks;
  switch (action.type){
    case actionType.ADD_TASK:
      tasks = {...state, task: [...state.task, action.payload]};
      updateTasks(tasks.task);
      return tasks;
    case actionType.DEL_TASK:
      tasks = {...state, task: state.task.filter((todo) => {
        if(todo.id !== action.payload)
          return todo;
        else
          return false;
      })};
      updateTasks(tasks.task);
      return tasks;
    case actionType.CHECK_TASK:
      tasks = {...state, task: state.task.map((todo) => {
        if(todo.id === action.id)
          todo.checked = action.checked
        
        return todo;
      })};
      updateTasks(tasks.task);
      return tasks;
    // case actionType.SET_TODOS:
    //   return {...state, task: [...state.task, ...action.payload]}
    case actionType.DELETE_ALL_TASKS:
      tasks = {...state, task: []};
      updateTasks(tasks.task);
      return tasks;
    case actionType.EDIT_TASK:
      tasks = {...state, task: state.task.map((item) => item.id === action.payload.taskId ? {...item, title: action.payload.title} : item)};
      updateTasks(tasks.task);
      return tasks;
    default:
      return state;
  }
}

// export const getTodosThunk = () => (dispatch) => {
//   try{  
//     fetch('https://jsonplaceholder.typicode.com/todos/')
//       .then(response => response.json())
//       .then(json => dispatch(actionSetTodos(json)));
//   }catch(e){
//     console.log(e);
//   }
// } 

export default taskReducer;