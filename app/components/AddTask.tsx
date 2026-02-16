"use client";
import { addTodo } from '@/src/api';
import React from 'react'

const AddTask = () => {

    const handleSubmit = async  (e: React.FormEvent) => {
        e.preventDefault();
const todo = {
    id:"3",
    text:"New Task",
};
        await addTodo(todo);
    }

  return (
    <form className="mb-4 space-y-3"onSubmit={handleSubmit}>
        <input type="text" className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:border-blue-400"/>
        <button className="w-full px-4 py-2 text-white bg-blue-500 rounded transform hover:bg-blue-400 hover:scale-95 duration-200">
            Add Task
        </button>
    </form>
  )
}

export default AddTask
