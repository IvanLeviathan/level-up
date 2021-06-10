import React from "react";
// import {useDispatch, useSelector } from 'react-redux';
import { actionCheckTodo, actionCreateTodo, actionDelTodo } from '../store/todos';
import { connect } from "react-redux";
import Task from '../components/Task';


// export default function TaskContainer(){
//   const todos = useSelector((state) => state.task);
//   const dispatch = useDispatch();

//   const [change, setChange] = useState('');

//   const handlerChangeInput = (e) => {
//     setChange(e.target.value);
//   }

//   const handlerAddToDo = () => {
//     const data = {
//       title: change,
//       id: Date.now(),
//       checked: false
//     }
//     dispatch(actionCreateTodo(data));
//     setChange('');
//   }

//   const handlerDelToDo = (id) => {
//     dispatch(actionDelTodo(id));
//   }

//   const handlerCheckToDo = (event, id) => {
//     dispatch(actionCheckTodo(event.target.checked, id));
//   }

//   return (
//     <Task
//       inputValue = {change}
//       onChangeInput = {handlerChangeInput}
//       onAdd = {handlerAddToDo}
//       todos={todos}
//       onCheck = {handlerCheckToDo}
//       onDel = {handlerDelToDo}
//     />
//   )
// }


class TaskContainer extends React.Component {
  state = {
    change: "",
  };

  handlerChangeInput = (e) => {
    console.log(e.target.value);
    this.setState({ change: e.target.value });
  }

  handlerAddToDo = () => {
    const data = {
      title: this.state.change,
      id: Date.now(),
      checked: false
    }
    this.props.handlerAddTodo(data);
    this.setState({ change: "" });
  }

  handlerDelToDo = (id) => {
    this.props.handlerDelTodo(id);
  }

  handlerCheckToDo = (event, id) => {
    this.props.handlerCheckToDo(event.target.checked, id);
  }

  render() {
    const { todos } = this.props;
    return (
      <Task
        inputValue = {this.state.change}
        onChangeInput = {this.handlerChangeInput}
        onAdd = {this.handlerAddToDo}
        todos={todos}
        onCheck = {this.handlerCheckToDo}
        onDel = {this.handlerDelToDo}
      />
    );
  }
}
const mapStateToProps = (state) => {
  return {
    todos: state.task,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    handlerAddTodo: (payload) => dispatch(actionCreateTodo(payload)),
    handlerDelTodo: (payload) => dispatch(actionDelTodo(payload)),
    handlerCheckToDo: (checked, id) => dispatch(actionCheckTodo(checked, id))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TaskContainer);
