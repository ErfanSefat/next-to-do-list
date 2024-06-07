"use client"
import Image from "next/image";
import React from "react";
import { useState } from "react";
import { updatetodos } from "../lib/data";
export default function Taskbox({
  id,
  task,
  time,
  done,
}: {
  id: number;
  task: string;
  time: string;
  done: boolean;
}) {
  const [status, setStatus] = React.useState(done);
  async function handler() {
    setStatus(!status);
    updatetodos({ id, done: status });
  }
  return (
    <div className="flex items-center p-1 rounded-lg bg-box text-white mt-4 h-fit  w-[858.66px]">
      <div
        onClick={handler}
        className={
          " h-4 w-4 rounded-[100px] mx-3 cursor-pointer border  border-white border-opacity-45  " +
          (status ? " bg-primary" : " bg-transparent")
        }
      ></div>
      <div className="flex justify-between w-full">
        <div className="flex flex-col my-1 ml-1">
          <div className="text-[18px]">{task}</div>
          <div className="text-[12px] opacity-50">{time}</div>
        </div>
        <div className="flex items-center cursor-pointer">
          <Image
            className="mx-3"
            width={"15"}
            height={"10"}
            src={"trash.svg"}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
