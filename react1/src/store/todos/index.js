const storageName = 'react-tasks';

const initState = {task: localStorage.getItem(storageName) ? JSON.parse(localStorage.getItem(storageName)) : []};


const actionType = {
  ADD_TASK: 'ADD_TASK',
  DEL_TASK: 'DEL_TASK'
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



const updateTasks = (tasks) => {
  console.log(tasks);
  localStorage.setItem(storageName, JSON.stringify(tasks));
}
console.log(localStorage.getItem(storageName));

const taskReducer = (state = initState, action) => {
  let tasks;
  switch (action.type){
    case actionType.ADD_TASK:
      tasks = {...state, task: [...state.task, action.payload]};
      updateTasks(tasks.task);
      console.log(state);
      return tasks;
    case actionType.DEL_TASK:
      tasks = {...state, task: state.task.filter((todo) => {
        if(todo.id != action.payload)
          return todo;
      })};
      updateTasks(tasks.task);
      return tasks;
    default:
      return state;
  }
}

export default taskReducer;