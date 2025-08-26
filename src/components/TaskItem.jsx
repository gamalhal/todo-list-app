// src/components/TaskItem.jsx
import { useState } from 'react';

function TaskItem({ task, onToggleComplete, onDeleteTask, onEditTask }) {
  // 1. حالة لتتبع وضع التعديل
  const [isEditing, setIsEditing] = useState(false);
  // 2. حالة لتتبع النص الجديد أثناء التعديل
  const [editText, setEditText] = useState(task.text);

  // 3. دالة لحفظ التعديل
  const handleSave = () => {
    if (editText.trim()) {
      onEditTask(task.id, editText);
    }
    setIsEditing(false); // الخروج من وضع التعديل
  };
  
  // 4. دالة لمعالجة الضغط على المفاتيح
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSave();
    } else if (e.key === 'Escape') {
      // إلغاء التعديل والعودة للنص الأصلي
      setEditText(task.text);
      setIsEditing(false);
    }
  };

  // 5. العرض المشروط
  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      {isEditing ? (
        // في وضع التعديل
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onBlur={handleSave} // الحفظ عند فقدان التركيز
          onKeyDown={handleKeyDown}
          autoFocus // للتركيز على الحقل تلقائياً
          className="edit-input"
        />
      ) : (
        // في وضع القراءة
        <span 
          onDoubleClick={() => setIsEditing(true)} // الدخول لوضع التعديل عند النقر المزدوج
          onClick={() => onToggleComplete(task.id)}
        >
          {task.text}
        </span>
      )}

      <div>
        <button className="edit-btn" onClick={() => setIsEditing(!isEditing)}>✏️</button>
        <button onClick={() => onDeleteTask(task.id)}>حذف</button>
      </div>
    </li>
  );
}

export default TaskItem;