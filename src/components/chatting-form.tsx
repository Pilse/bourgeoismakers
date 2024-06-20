"use client";

import { CHAT_PRESET_TYPE, CHAT_STATUS, chatStatus, statusOrder } from "@/domain";
import { IconArrowForward, IconOfflineBolt } from "@/icons";
import { IconBunong } from "@/icons/bunong";
import { IconSendFill } from "@/icons/send-fill";
import { FormEvent, useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

export const ChattingForm = () => {
  const chatRef = useRef<HTMLDivElement>(null);
  const [input, setInput] = useState("");
  const [chatPresets, setChatPresets] = useState(chatStatus);
  const [chat, setChat] = useState<
    ({ type: "bot"; preset: CHAT_PRESET_TYPE; message?: string } | { type: "user"; message: string })[]
  >([
    {
      type: "bot",
      preset: "item",
    },
  ]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!input) {
      return;
    }

    const inProgressIndex = statusOrder.findIndex((key) => chatPresets[key] === "IN_PROGRESS");

    if (inProgressIndex === -1) {
      setChat((prev) => [...prev, { type: "user", message: input }]);
      setInput("");
      return;
    }

    setChat((prev) => [
      ...prev,
      { type: "user", message: input },
      { type: "bot", preset: statusOrder[inProgressIndex + 1] },
    ]);
    setChatPresets((prev) => ({
      ...prev,
      [statusOrder[inProgressIndex]]: "COMPLETED",
      [statusOrder[inProgressIndex + 1]]: "IN_PROGRESS",
    }));
    setInput("");
  };

  useEffect(() => {
    if (!chatRef.current) {
      return;
    }

    chatRef.current.scrollTop = chatRef.current.scrollHeight;
  }, [chat]);

  return (
    <>
      <div className="w-[860px] flex flex-col overflow-y-auto h-full" ref={chatRef}>
        <div className="grow flex flex-col gap-3 p-4">
          {chat.map((c, idx) =>
            c.type === "bot" ? (
              <BotChat key={c.message + c.type + String(idx)} presetType={c.preset} message={c.message} />
            ) : (
              <UserChat key={c.message + c.type + String(idx)} message={c.message} />
            )
          )}
        </div>
      </div>

      <form
        className="bg-gradient-to-r from-[#7DEFA4] to-[#00BEE8] p-[2px] mx-[40px] rounded-[99px] min-h-[56px] mb-[40px] mt-[24px] flex items-center"
        onSubmit={handleSubmit}
      >
        <div className="w-full h-full rounded-[99px] flex bg-white items-center pr-[16px]">
          <input
            type="text"
            placeholder="채팅을 입력해주세요"
            className="grow rounded-[99px] px-4 h-full"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <span className={twMerge("text-gray-200", input && "text-[#00BEE8]")}>
            <IconSendFill />
          </span>
        </div>
      </form>
    </>
  );
};

interface IBotChat {
  presetType: CHAT_PRESET_TYPE;
  message?: string;
}

const BotChat = ({ presetType, message }: IBotChat) => {
  if (presetType === "item") {
    return (
      <div className="flex gap-[8px]">
        <IconBunong />
        <div className="flex flex-col gap-[8px]">
          <span className="text-body/m/500 text-gray-600">부농이</span>
          <p className="px-[24px] py-[12px] bg-white rounded-[24px] text-heading/s text-gray-900">
            안녕하세요 저는 여러분의 마케팅을 도와줄 부농이에요 :)
          </p>
          <p className="px-[24px] py-[12px] bg-white rounded-[24px] text-heading/s text-gray-900 flex flex-col">
            <span>어떤 품목을 홍보하고 싶은지 알려주세요!</span>
            <span className="text-gray-500 text-body/s/400">(ex. 딸기, 고구마 등)</span>
          </p>
        </div>
      </div>
    );
  }

  if (presetType === "contents") {
    return (
      <div className="flex gap-[8px]">
        <IconBunong />
        <div className="flex flex-col gap-[8px]">
          <span className="text-body/m/500 text-gray-600">부농이</span>
          <p className="px-[24px] py-[12px] bg-white rounded-[24px] text-heading/s text-gray-900 whitespace-pre-wrap">
            {`만들고 싶은 콘텐츠 유형은 무엇인가요?\n보기에 없는 경우, 직접 입력해주세요.`}

            <div className="mt-[16px] flex flex-col gap-[8px]">
              <span className="flex items-center gap-[4px] text-heading/s text-gray-400">
                <IconOfflineBolt />
                <span>추천</span>
              </span>

              <div className="w-[376px] rounded-[8px] border border-gray-200 flex ml-[24px]">
                <div className="w-[96px] h-[96px] bg-gray-100"></div>
                <p className="text-black text-heading/xs whitespace-pre-wrap flex items-center px-[16px]">
                  {`고객 리뷰 혹은 평가\n: 고객들이 이게 좋대요!`}
                </p>
              </div>

              <div className="w-[376px] rounded-[8px] border border-gray-200 flex ml-[24px]">
                <div className="w-[96px] h-[96px] bg-gray-100"></div>
                <p className="text-black text-heading/xs whitespace-pre-wrap flex items-center px-[16px]">
                  {`자화자찬\n: 우리 이거 진짜 좋아요`}
                </p>
              </div>

              <div className="w-[376px] rounded-[8px] border border-gray-200 flex ml-[24px]">
                <div className="w-[96px] h-[96px] bg-gray-100"></div>
                <p className="text-black text-heading/xs whitespace-pre-wrap flex items-center px-[16px]">
                  {`레시피 공유`}
                </p>
              </div>
            </div>
          </p>
        </div>
      </div>
    );
  }

  if (presetType === "contacts") {
    return (
      <div className="flex gap-[8px]">
        <IconBunong />
        <div className="flex flex-col gap-[8px]">
          <span className="text-body/m/500 text-gray-600">부농이</span>
          <p className="px-[24px] py-[12px] bg-white rounded-[24px] text-heading/s text-gray-900 whitespace-pre-wrap flex flex-col">
            <span>
              구매처 <span className="text-gray-500 text-body/s/400">(예. URL, 연락처 등)</span>을 추가할까요?
            </span>
            <span>추가하려는 구매처를 모두 알려주세요.</span>
            <span>없다면 [넘어가기]를 선택해주세요~</span>

            <div className="h-px w-full bg-gray-200 my-[16px]"></div>

            <button className="flex items-center gap-[4px] rounded-[6px] bg-[#E0F3F0] text-[#089E83] h-[36px] px-[16px] self-start hover:bg-[#B4E2D8]">
              <span className="heading-xs">이 질문 넘어가기</span>
              <span>
                <IconArrowForward size={16} />
              </span>
            </button>
          </p>
        </div>
      </div>
    );
  }

  if (presetType === "events") {
    return (
      <div className="flex gap-[8px]">
        <IconBunong />
        <div className="flex flex-col gap-[8px]">
          <span className="text-body/m/500 text-gray-600">부농이</span>
          <p className="px-[24px] py-[12px] bg-white rounded-[24px] text-heading/s text-gray-900 whitespace-pre-wrap flex flex-col">
            <span>현재 진행 중인 이벤트나 할인이 있나요?</span>
            <span>
              행사 내용에 대해 더 자세히 알려주세요.
              <span className="text-gray-500 text-body/s/400">(예. 품목, 가격, 할인률, 기간 등 등)</span>
            </span>
            <span>없다면 [넘어가기]를 선택해주세요~</span>

            <div className="h-px w-full bg-gray-200 my-[16px]"></div>

            <button className="flex items-center gap-[4px] rounded-[6px] bg-[#E0F3F0] text-[#089E83] h-[36px] px-[16px] self-start hover:bg-[#B4E2D8]">
              <span className="heading-xs">이 질문 넘어가기</span>
              <span>
                <IconArrowForward size={16} />
              </span>
            </button>
          </p>
        </div>
      </div>
    );
  }

  if (presetType === "keywords") {
    return (
      <div className="flex gap-[8px]">
        <IconBunong />
        <div className="flex flex-col gap-[8px]">
          <span className="text-body/m/500 text-gray-600">부농이</span>
          <p className="px-[24px] py-[12px] bg-white rounded-[24px] text-heading/s text-gray-900 whitespace-pre-wrap flex flex-col">
            <span>들어갔으면 하는 문구가 있나요?</span>
            <span>원하는 문구를 알려주세요.</span>
            <span>없다면 [넘어가기]를 선택해주세요~</span>

            <div className="h-px w-full bg-gray-200 my-[16px]"></div>

            <button className="flex items-center gap-[4px] rounded-[6px] bg-[#E0F3F0] text-[#089E83] h-[36px] px-[16px] self-start hover:bg-[#B4E2D8]">
              <span className="heading-xs">이 질문 넘어가기</span>
              <span>
                <IconArrowForward size={16} />
              </span>
            </button>
          </p>
        </div>
      </div>
    );
  }
};

interface IUserChat {
  message: string;
}

const UserChat = ({ message }: IUserChat) => {
  return (
    <p className="px-[24px] py-[12px] bg-gray-700 rounded-[24px] text-heading/s text-white whitespace-pre-wrap self-end">
      {message}
    </p>
  );
};
