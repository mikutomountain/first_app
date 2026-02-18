"use client";

import { deleteTodo, editTodo } from '@/src/api';
import { Task } from '@/src/types';
import React, { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

interface TodoProps {
    todo: Task;
}
    
const Todo = ({ todo }: TodoProps) => {
const ref = useRef<HTMLInputElement>(null);
const router = useRouter();

  const [isEditing, setIsEditing] = React.useState(false);
  const [editedTextTitle, setEditedTextTitle] = React.useState(todo.text);

  useEffect(() => {
    if (isEditing){
      ref.current?.focus();
    }
  }, [isEditing]);

  const handleEdit = async () => {
    await editTodo(todo.id, editedTextTitle);
    setIsEditing(false);
    router.refresh();
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleDelete = async () => {
    await deleteTodo(todo.id);
    router.refresh();
  };
  return (
    <li 
      key={todo.id}
      className="flex justify-between p-4 bg-white border-1-4 border-blue-500 rounded shadow"
        >
          {isEditing ? (
            <input 
              ref={ref}
              type="text"
              className="mr-2 py-1 px-2 rounded border-gray-400 border"
              value={editedTextTitle}
              
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEditedTextTitle(e.target.value)}
              
            />
           ) : (
             <span>{todo.text}</span>
           )}

          <div>
            {isEditing ? (
              <button className="text-blue-500 mr-3" onClick={handleSave}>
                save
              </button>
            ) : (
            <button className="text-green-500 mr-3" onClick={handleEdit}>
              edit
              </button>
            )}
            <button className="text-red-500" onClick={handleDelete}>
              Delete
            </button>
          </div>
        </li>
  );
};

export default Todo
