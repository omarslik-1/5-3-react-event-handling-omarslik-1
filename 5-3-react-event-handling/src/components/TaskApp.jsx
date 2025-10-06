import React, { useState } from "react";
import TaskList from "./TaskList";

export default function TaskApp() {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState([]);

  function handleSubmit() {
  if (!text.trim()) {
    return;
  }

  setTasks(prev => [...prev, { id: Date.now(), text: text.trim() }]);
  setText("");
}


  function handleDelete(id) {
    const newTasks = tasks.filter((t) => t.id !== id);
    setTasks(newTasks);
  }

  function handleClearAll() {
    setTasks([]);
  }

  return (
    <section className="card">
      <div className="inputRow">
        <input
          type="text"
          placeholder="Type a task..."
          className="input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSubmit();
            }
          }}
        />
        <button className="btn btn--primary" onClick={handleSubmit}>
          Submit
        </button>
      </div>

      {/* Show current input value */}
      <p>{text}</p>

      {/* Show tasks */}
      <TaskList tasks={tasks} onDelete={handleDelete} />

      <div className="footerRow">
        <button className="btn btn--ghost" onClick={handleClearAll}>
          Clear All
        </button>
      </div>
    </section>
  );
}