// src/components/TaskItem.jsx
function TaskItem({ task, onToggleComplete, onDeleteTask }) {
  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      <span onClick={() => onToggleComplete(task.id)}>
        {task.text}
      </span>
      <button onClick={() => onDeleteTask(task.id)}>حذف</button>
    </li>
  );
}

export default TaskItem;