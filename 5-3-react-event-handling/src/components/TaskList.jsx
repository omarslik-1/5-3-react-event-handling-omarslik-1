import React from "react";
import TaskItem from "./TaskItem";

export default function TaskList({ tasks, onDelete }) {
  if (tasks.length === 0) {
    return <p className="list__placeholder">No tasks yet...</p>;
  }

  return (
    <ul className="list">
      {tasks.map((t) => (
        <TaskItem key={t.id} id={t.id} text={t.text} onDelete={onDelete} />
      ))}
    </ul>
  );
}