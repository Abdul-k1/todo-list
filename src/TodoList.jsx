import React, { useState } from "react";

function TodoList() {
  const [task, setTask] = useState([
    
  ]);
  const [newTask, setNewTask] = useState("");

  function handleEventChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if(newTask !== "") {
    setTask((t) => [...t, newTask]);
    setNewTask("");
    }
  }

  function deleteTask(index) {
    const updatedTask = task.filter((_, i) => i !== index);
    setTask(updatedTask);
  }

  return (
    <>
      <div className="to-do-list">
        <h1>To-Do-List</h1>
        <div>
          <input
            type="Text"
            value= {newTask}
            onChange={handleEventChange}
            placeholder="Add Your Task..."
          ></input>
          <button className="add" onClick={ addTask}>
            Add
          </button>
        </div>
        <ol>
          {task.map((t, index) => (
            <li key={index}>
              <span className="text">{t}</span>
              <button className="delete" onClick={() => deleteTask(index)}>
                🗑️
              </button>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}

export default TodoList;
