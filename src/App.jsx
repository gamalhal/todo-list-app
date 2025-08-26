// src/App.jsx
import { useState } from 'react';
import TaskInput from './components/TaskInput'; // استيراد المكون
import './App.css';

function App() {
  const [tasks, setTasks] = useState([
     { id: 1, text: 'تعلم React', completed: true },
     { id: 2, text: 'بناء مشروع قائمة مهام', completed: false },
  ]);

  // دالة لإضافة مهمة جديدة
  const addTask = (taskText) => {
    const newTask = {
      id: Date.now(), // استخدام التوقيت الحالي كمعرّف فريد
      text: taskText,
      completed: false,
    };
    setTasks([...tasks, newTask]); // إضافة المهمة الجديدة إلى نهاية المصفوفة
  };

  return (
    <div className="app-container">
      <header>
        <h1>قائمة مهامي</h1>
      </header>
      <main>
        <TaskInput onAddTask={addTask} /> {/* تمرير الدالة كـ prop */}
        {/* سيتم عرض قائمة المهام هنا */}
      </main>
    </div>
  );
}

export default App;