import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TodosContainer from "./container/todosContainer";
import Button from "./components/Button";
import PlusIcon from './assets/images/plus.svg';
import { useDispatch } from "react-redux";
import { actionShowModal } from "./store/modals";
import Modals from "./components/Modals";
function App() {
  const dispatch = useDispatch();

  const newTodo = (e) => {
    dispatch(actionShowModal({name: 'ModalAddTodoContainer'}));
  };
  return (
    <div className="App">
      <Header/>
      <TodosContainer/>
      <Button
        text = {"<img src='"+ PlusIcon + "' alt='Add Todo' />"}
        onClick={newTodo}
        classes="add-todo rounded"
      />
      <Footer/>
      <Modals/>
    </div>
  );
}

export default App;
