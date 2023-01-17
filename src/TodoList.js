import React, { useEffect, useState } from "react";
import Listitem from "./Listitem";

const TodoList = () => {
  const [task, setTask] = useState("");
  const [allTask, setAllTaks] = useState([]);

  const addItem = (e) => {
    e.preventDefault();
    console.log("This is value obtained", allTask);
    setTask("");

    // console.log(task);
    setAllTaks((oldItems) => {
      return [...oldItems, task];
    });
    // console.log("All tasks after submit:", allTask);
  };
  const deleteItem = (id) => {
    setAllTaks((oldItems) => {
      return oldItems.filter((elem, index) => {
        return index !== id;
      });
    });
    console.log("It is called in main");
  };

  return (
    <div className="todolist">
      <h1>Todolist</h1>
      <div className="todolist-adder">
        <input
          type="text"
          name="task"
          placeholder="task"
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
          }}
        ></input>
        <button type="submit" onClick={addItem}>
          Add
        </button>
      </div>
      <div className="items">
        {allTask.map((taskone, index) => {
          return (
            <Listitem
              item={taskone}
              key={index}
              id={index}
              onSelect={deleteItem}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TodoList;
