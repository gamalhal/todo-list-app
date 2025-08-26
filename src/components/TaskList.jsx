// src/components/TaskList.jsx
import TaskItem from './TaskItem';

// src/components/TaskList.jsx

function TaskList({ tasks, onToggleComplete, onDeleteTask, onEditTask }) { // <-- استقبل الدالة هنا
  // ... (الكود كما هو)
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggleComplete={onToggleComplete}
          onDeleteTask={onDeleteTask}
          onEditTask={onEditTask} // <-- مررها إلى TaskItem
        />
      ))}
    </ul>
  );
}

export default TaskList;