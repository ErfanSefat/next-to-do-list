import Image from "next/image";
import Textbox from "./ui/Textbox";
import Taskbox from "./ui/Taskbox";

export default function Home() {
  return (
    <div className=" flex flex-col justify-center align-middle">
      <span className="mt-4 text-primary-text text-[25px]">Tasks:</span>
      <Taskbox task="Hello my name is Erfan" time="20930234" done={false}/>

      <Textbox />
    </div>
  );
}
