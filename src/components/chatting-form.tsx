"use client";

import { IconSendFill } from "@/icons/send-fill";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

export const ChattingForm = () => {
  const [input, setInput] = useState("");

  return (
    <>
      <div className="w-[860px] flex flex-col overflow-y-auto">
        <div className="grow flex flex-col gap-3 p-4">
          <div className="bg-white w-1/2 h-[64px] self-start"></div>
          <div className="bg-white w-1/2 h-[132px] self-end"></div>
          <div className="bg-white w-1/2 h-[92px] self-end"></div>
          <div className="bg-white w-1/2 h-[64px] self-start"></div>
          <div className="bg-white w-1/2 h-[132px] self-end"></div>
          <div className="bg-white w-1/2 h-[64px] self-start"></div>
          <div className="bg-white w-1/2 h-[304px] self-start"></div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-[#7DEFA4] to-[#00BEE8] p-[2px] mx-[40px] rounded-[99px] min-h-[56px] mb-[40px] mt-[24px] flex items-center">
        <div className="w-full h-full rounded-[99px] flex bg-white items-center pr-[16px]">
          <input
            type="text"
            placeholder="채팅을 입력해주세요"
            className="grow rounded-[99px] px-4 h-full"
            onChange={(e) => setInput(e.target.value)}
          />
          <span className={twMerge("text-gray-200", input && "text-[#00BEE8]")}>
            <IconSendFill />
          </span>
        </div>
      </div>
    </>
  );
};
