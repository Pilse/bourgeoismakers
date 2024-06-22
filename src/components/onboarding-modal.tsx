"use client";

import { useState } from "react";
import { IconAI } from "@/icons";
import Image from "next/image";

export const OnboardingModal = () => {
  const [showModal, setShowModal] = useState(true);
  const [step, setStep] = useState(1);

  const handleNextClick = () => {
    setStep((prev) => prev + 1);
  };

  const handlePrevClick = () => {
    setStep((prev) => prev - 1);
  };

  const handleCompleteClick = () => {
    setStep(1);
    setShowModal(false);
  };

  return !showModal ? null : (
    <div className="absolute top-0 left-0 bg-[#F0F0F0]/50 w-full h-full flex justify-center items-center">
      <div className="shadow-[0_5px_20px_0_rgba(51,51,51,0.1)] h-[600px] flex rounded-[16px]">
        {step === 1 && (
          <div className="w-[452px] bg-white p-[32px] rounded-l-[16px] h-full flex flex-col">
            <span className="text-gray-500 text-heading/s">1/2</span>

            <h3 className="text-heading/xl flex items-center gap-[8px] mt-[16px]">
              <IconAI size={24} />
              <span>AI가 알려주는 맞춤 브랜딩</span>
            </h3>

            <p className="grow mt-[8px] text-body/l/500 whitespace-pre-wrap text-gray-500">{`입력한 농장 정보에 맞춰\n내 농장 이름이나 한 줄 소개, 내 농장의 특징 등\nAI가 적합한 브랜딩 정보를 추천 해드릴게요`}</p>

            <button
              className="bg-[#089E83] hover:bg-[#028066] text-white flex h-[48px] w-full rounded-[6px] items-center justify-center text-heading/m"
              onClick={handleNextClick}
            >
              다음
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="w-[452px] bg-white p-[32px] rounded-l-[16px] h-full flex flex-col">
            <span className="text-gray-500 text-heading/s">2/2</span>

            <h3 className="text-heading/xl flex items-center gap-[8px] mt-[16px]">
              <IconAI size={24} />
              <span>AI로 손쉬운 콘텐츠 제작</span>
            </h3>

            <p className="grow mt-[8px] text-body/l/500 whitespace-pre-wrap text-gray-500">{`브랜딩을 기반으로 인스타그램이나\n네이버 밴드 등 콘텐츠에 쓰일 텍스트를 제작해보세요`}</p>

            <div className="flex gap-[8px]">
              <button
                className="bg-white border border-gray-300 hover:bg-gray-50 flex h-[48px] w-full rounded-[6px] items-center justify-center text-heading/m text-black"
                onClick={handlePrevClick}
              >
                이전
              </button>
              <button
                className="bg-[#089E83] hover:bg-[#028066] text-white flex h-[48px] w-full rounded-[6px] items-center justify-center text-heading/m"
                onClick={handleCompleteClick}
              >
                확인
              </button>
            </div>
          </div>
        )}
        <div className="w-[452px] bg-[#f9fafb] rounded-r-[16px]">
          {step === 1 && <Image src="/branding_modal.png" width={450} height={600} alt="branding" />}
          {step === 2 && <Image src="/contents_modal.png" width={450} height={600} alt="branding" />}
        </div>
      </div>
    </div>
  );
};
