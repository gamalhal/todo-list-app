// src/components/TaskList.jsx
import TaskItem from './TaskItem';

function TaskList({ tasks, onToggleComplete, onDeleteTask }) {
  if (tasks.length === 0) {
    return <p className="no-tasks">لا يوجد مهام حاليًا. عظيم!</p>;
  }
  
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id} // مفتاح فريد لكل عنصر في القائمة
          task={task}
          onToggleComplete={onToggleComplete}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </ul>
  );
}

export default TaskList;