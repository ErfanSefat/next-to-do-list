import Image from "next/image";
import Textbox from "./ui/Textbox";
import Taskbox from "./ui/Taskbox";
import { gettodos } from "./lib/data";
export default async function Home() {
  const todos = await gettodos();
  console.log(typeof todos);
  console.log(todos);
  return (
    <div className=" flex flex-col justify-center align-middle">
      <span className="mt-4 text-primary-text text-[25px]">Tasks:</span>
      {todos.map((todo) => (
        <Taskbox
          key={todo.id}
          task={todo.todotext}
          time={todo.todotime}
          done={todo.done}
        />
      ))}
      <Textbox />
    </div>
  );
}
