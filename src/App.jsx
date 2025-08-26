// src/App.jsx
import { useState, useEffect } from 'react'; // استيراد useEffect
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import './App.css';

function App() {


  // src/App.jsx

// ... (داخل مكون App، بجانب دوال addTask, deleteTask)

// دالة لتعديل نص مهمة موجودة
const editTask = (taskId, newText) => {
  setTasks(currentTasks => 
    currentTasks.map(task => 
      task.id === taskId ? { ...task, text: newText } : task
    )
  );
};




  // 1. تعديل الحالة لتقرأ من LocalStorage عند بدء التشغيل
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  // 2. استخدام useEffect لحفظ المهام في LocalStorage كلما تغيرت
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]); // هذا التأثير سيعمل فقط عندما تتغير قيمة `tasks`

  // ... (باقي الدوال: addTask, toggleComplete, deleteTask)
  const addTask = (taskText) => {
    const newTask = { id: Date.now(), text: taskText, completed: false };
    setTasks([...tasks, newTask]);
  };

  const toggleComplete = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

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