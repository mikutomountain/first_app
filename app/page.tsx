import Image from "next/image";
import AddTask from "./components/AddTask";
import ToDoList from "./components/ToDoList";

export default function Home() {
  return <main>
    <h1>Nextjs 13 Todo App</h1>
    <div>
      <div>
        <AddTask />
        <ToDoList />
      </div>
    </div>
  </main>;
}

