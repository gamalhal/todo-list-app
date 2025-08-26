// src/App.jsx
import { useState } from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList'; // استيراد المكون
import './App.css';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'تعلم React', completed: true },
    { id: 2, text: 'بناء مشروع قائمة مهام', completed: false },
  ]);

  const addTask = (taskText) => {
    const newTask = { id: Date.now(), text: taskText, completed: false };
    setTasks([...tasks, newTask]);
  };

  // دالة لتحديث حالة اكتمال المهمة
  const toggleComplete = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // دالة لحذف مهمة
  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="app-container">
      <header>
        <h1>قائمة مهامي</h1>
      </header>
      <main>
        <TaskInput onAddTask={addTask} />
        <TaskList
          tasks={tasks}
          onToggleComplete={toggleComplete}
          onDeleteTask={deleteTask}
        />
      </main>
    </div>
  );
}

export default App;