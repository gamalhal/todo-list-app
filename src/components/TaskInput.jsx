// src/components/TaskInput.jsx
import { useState } from 'react';

function TaskInput({ onAddTask }) {
  const [inputValue, setInputValue] = useState('');

  const handleAddTask = () => {
    // التحقق من أن المدخل ليس فارغاً
    if (inputValue.trim() === '') {
      alert('الرجاء إدخال نص المهمة!');
      return;
    }
    onAddTask(inputValue);
    setInputValue(''); // تفريغ حقل الإدخال بعد الإضافة
  };

  return (
    <div className="task-input-container">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="أضف مهمة جديدة..."
        onKeyDown={(e) => e.key === 'Enter' && handleAddTask()}
      />
      <button onClick={handleAddTask}>إضافة</button>
    </div>
  );
}

export default TaskInput;