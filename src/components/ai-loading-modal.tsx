"use client";

import { Oval } from "react-loader-spinner";

export const AILoadingModal = () => {
  return (
    <div className="absolute top-0 left-0 bg-[#F0F0F0]/85 w-full h-full flex justify-center items-center flex-col">
      <Oval
        visible={true}
        height="48"
        strokeWidth="6"
        width="48"
        color="#089E83"
        secondaryColor="#089e8333"
      />
      <p className="whitespace-pre-wrap text-center text-body/m/500 mt-[16px]">{`AI가 브랜딩 정보를 생성 중입니다.\n잠시만 기다려주세요`}</p>
    </div>
  );
};
