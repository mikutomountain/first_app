'use client';

import {Task} from '@/src/types';
import React,{ useEffect } from "react"; 
import Todo from "./Todo";

interface TodoListProps {
  todos: Task[];
}

const ToDoList = ({ todos }: TodoListProps) => {
  return (
    <div>
      <h2>Your ToDo List</h2>
      <ul className="space-y-3">
        {todos.map((todo) => (
         <Todo key={todo.id} todo={todo} />
        ))}



        
        {/* <li className="flex justify-between p-4 bg-white border-1-4 border-blue-500 rounded shadow">
          <span>散歩</span>
          <div>
            <button className="text-green-500 mr-3">edit</button>
            <button className="text-red-500 ">delete</button>
          </div>
        </li>
        <li className="flex justify-between p-4 bg-white border-1-4 border-blue-500 rounded shadow">
          <span>散歩</span>
          <div>
            <button className="text-green-500 mr-3">edit</button>
            <button className="text-red-500 ">delete</button>
          </div>
        </li> */}

      </ul>
    </div>
  );
};

export default ToDoList;
