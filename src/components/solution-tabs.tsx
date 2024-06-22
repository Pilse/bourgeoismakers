"use client";

import Image from "next/image";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

export const SolutionTabs = () => {
  const [activeTab, setActiveTab] = useState<"BRANDING" | "CONTENTS" | "DISTRIBUTION" | "SELL">("BRANDING");

  return (
    <div className="flex flex-col items-center">
      <div className="bg-[#B4E2D8] h-[48px] p-1 rounded-lg text-body/m/500 flex w-fit">
        <button
          onClick={() => setActiveTab("BRANDING")}
          className={twMerge(
            "h-full rounded-md flex justify-center items-center w-32",
            activeTab === "BRANDING" && "bg-white text-gray-800"
          )}
        >
          농장 브랜딩
        </button>
        <button
          onClick={() => setActiveTab("CONTENTS")}
          className={twMerge(
            "h-full rounded-md flex justify-center items-center w-32",
            activeTab === "CONTENTS" && "bg-white text-gray-800"
          )}
        >
          콘텐츠 생성
        </button>
        <button
          onClick={() => setActiveTab("DISTRIBUTION")}
          className={twMerge(
            "h-full rounded-md flex justify-center  gap-1 items-center w-32",
            activeTab === "DISTRIBUTION" && "bg-white text-gray-800"
          )}
        >
          <span>유통 관리</span>
          <span className="text-[#B45309] bg-[#FEF3C7] px-1.5 rounded-full h-[20px] flex items-center text-body/xs/500">
            준비중
          </span>
        </button>
        <button
          onClick={() => setActiveTab("SELL")}
          className={twMerge(
            "h-full rounded-md flex justify-center  gap-1 items-center w-32",
            activeTab === "SELL" && "bg-white text-gray-800"
          )}
        >
          <span>판매 관리</span>
          <span className="text-[#B45309] bg-[#FEF3C7] px-1.5 rounded-full h-[20px] flex items-center text-body/xs/500">
            준비중
          </span>
        </button>
      </div>

      <div className="mt-8">
        <Image
          src={
            activeTab === "BRANDING"
              ? "/branding_guide.png"
              : activeTab === "CONTENTS"
              ? "/contents_guide.png"
              : "/updated_guide.png"
          }
          alt="guide"
          width={960}
          height={540}
        />
      </div>
    </div>
  );
};
