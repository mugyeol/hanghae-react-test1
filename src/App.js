import { useState } from "react";
import classes from "./App.module.css";

function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const addTodoHandler = (e) => {
    e.preventDefault();
    setTodoList((prevState) => {
      prevState.push(todo);
      return [...prevState];
    });
    console.log(todoList);
    setTodo("");
  };

  const onChangeHandler = (e) => {
    setTodo(e.target.value);
  };
  return (
    <div className={classes.wrapper}>
      <form className={classes.formContainer} onSubmit={addTodoHandler}>
        <input placeholder="자바스크립트를 배워봅시다"value={todo} onChange={onChangeHandler} />
        <button type="submit">추가하기</button>
      </form>
      <h1>Todo List</h1>
      <div className={classes.todoContainer}>
        {todoList.map((val, index) => (
          <div className={classes.todo} key={index}>
            {val}
          </div>
        ))}
      </div>
    </div>
  );
}
export default App;
