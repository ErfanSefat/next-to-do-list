import Image from "next/image";
export default function Taskbox({task, time, done}:{task:string, time:string, done:boolean}) {
    return (

    <div className="flex items-center p-1 rounded-lg bg-box text-white mt-4 h-fit  w-[858.66px]">
      <div className={" h-4 w-4 rounded-[100px] mx-3 cursor-pointer"  + (done? " bg-primary":" bg-red-500")}></div>
      <div className="flex justify-between w-full">
        <div className="flex flex-col my-1 ml-1">
          <div className="text-[18px]">{task}</div>
          <div className="text-[12px] opacity-50">{time}</div>
        </div>
        <div className="flex items-center cursor-pointer">
          <Image className="mx-3" width={'15'} height={'10'} src={'trash.svg'} alt="" />
        </div>
      </div>
    </div>
  );
}
