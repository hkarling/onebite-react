import "./List.css";
import TodoItem from "./TodoItem";
import { useState, useMemo, useContext } from "react";
import { TodoContext } from "../App";

const List = () => {
  const [search, setSearch] = useState("");
  const { todos } = useContext(TodoContext);

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilterData = () => {
    if (search === "") {
      return todos;
    }
    return todos.filter((todo) =>
      // 대소문자 구분 x
      todo.content.toLowerCase().includes(search.toLowerCase())
    );
  };

  const filterdTodos = getFilterData();
  // const getAnalyzedData = () => {
  //   console.log("getAnalyzedData 호출!");
  //   const totalCount = todos.length;
  //   const doneCount = todos.filter((todo) => todo.isDone).length;
  //   const notDoneCount = totalCount - doneCount;

  //   return { totalCount, doneCount, notDoneCount };
  // };
  // const { totalCount, doneCount, notDoneCount } = getAnalyzedData();

  const { totalCount, doneCount, notDoneCount } = useMemo(() => {
    console.log("getAnalyzedData 호출!");
    const totalCount = todos.length;
    const doneCount = todos.filter((todo) => todo.isDone).length;
    const notDoneCount = totalCount - doneCount;
    return { totalCount, doneCount, notDoneCount };
  }, [todos]);

  return (
    <div className="List">
      <h4>Todo List 🌱</h4>
      <div> total: {totalCount} </div>
      <div> done: {doneCount} </div>
      <div> notDone: {notDoneCount} </div>
      <input
        value={search}
        onChange={onChangeSearch}
        placeholder="Input keyword"
      />
      <div className="todos_wrapper">
        {getFilterData().map((todo) => {
          return <TodoItem key={todo.id} {...todo} />;
        })}
      </div>
    </div>
  );
};

export default List;
