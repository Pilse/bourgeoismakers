/* eslint-disable @next/next/no-img-element */
"use client";

import {
  CHAT_PRESET_TYPE,
  CHAT_STATUS,
  ChatDTO,
  ChatListItem,
  ChatRes,
  chatPreset,
  chatStatus as defaultChatStatus,
  statusOrder,
} from "@/domain";
import { IconArrowForward, IconOfflineBolt } from "@/icons";
import { IconBunong } from "@/icons/bunong";
import { IconSendFill } from "@/icons/send-fill";
import { httpClient } from "@/service/http-client";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useRef, useState } from "react";
import { Oval } from "react-loader-spinner";
import { twMerge } from "tailwind-merge";

interface IChattingFormProps {
  brandId: string;
  id?: string;
}

export const ChattingForm = ({ brandId, id }: IChattingFormProps) => {
  const router = useRouter();
  const chatRef = useRef<HTMLDivElement>(null);
  const [chatId, setChatId] = useState(id);
  const [input, setInput] = useState("");
  const [chatStatus, setChatStatus] = useState(defaultChatStatus);
  const [chatLoading, setChatLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [aiLoading, setAiLoading] = useState(false);
  const [chat, setChat] = useState<
    ({ type: "bot"; preset: CHAT_PRESET_TYPE; message?: string } | { type: "user"; message: string })[]
  >([chatPreset.item]);

  console.log(chat);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let currentChatId = chatId;

    if (!input) {
      return;
    }

    setInput("");
    setChat((prev) => [...prev, { type: "user", message: input }]);

    if (currentStep === 5) {
      setAiLoading(true);
    } else {
      setChatLoading(true);
    }

    // 첫 채팅일 경우 생성 후 아이디 받아오기
    if (!chatId) {
      const createChatRes = await httpClient.post<{ farmId: string }, ChatListItem>(
        "/api/v1/contents/create_chat",
        { farmId: brandId }
      );

      currentChatId = createChatRes.chatId;
      setChatId(createChatRes.chatId);
      router.refresh();
    }

    if (!currentChatId) {
      return;
    }

    const lastBotMessage = chat.findLast((c) => c.type === "bot")?.message;

    const chatRes = await httpClient.post<ChatDTO, ChatRes>("/api/v1/contents/send_message", {
      chatId: currentChatId,
      botMessage: lastBotMessage ?? "",
      message: input,
      completionTrigger: false,
    });

    setChatLoading(false);
    setCurrentStep(chatRes.scenarioStep);

    // 시나리오 종료 후 ai 생성
    if (chatRes.scenarioStep === 0) {
      try {
        const res = await httpClient.post<{ chatId: string; completionTrigger: boolean }, ChatRes>(
          "/api/v1/contents/generate_content",
          { chatId: currentChatId, completionTrigger: true }
        );
        if (res.status) {
          setChat((prev) => [
            ...prev,
            { type: "bot", message: res.assistantMessage.content, preset: "text" },
          ]);
        }
      } catch (error) {
        setChat((prev) => [
          ...prev,
          { type: "bot", message: "죄송해요 이해하지 못했어요. 다시 말씀해주시겠어요?", preset: "text" },
        ]);
      }
      setAiLoading(false);
      return;
    }

    // 시나리오 진행
    const inProgressIndex = chatRes.scenarioStep - 2;
    setChat((prev) => [
      ...prev,
      ...(inProgressIndex < 5 ? [chatPreset[statusOrder[inProgressIndex + 1]]] : []),
    ]);

    setChatStatus((prev) => ({
      ...prev,
      [statusOrder[inProgressIndex]]: "COMPLETED",
      ...(inProgressIndex < 5 && { [statusOrder[inProgressIndex + 1]]: "IN_PROGRESS" }),
    }));
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

          {(chatLoading || aiLoading) && (
            <div className="flex gap-[8px]">
              <span className="shrink-0">
                <IconBunong />
              </span>
              <div className="flex flex-col gap-[8px]">
                <span className="text-body/m/500 text-gray-600">부농이</span>

                {chatLoading && (
                  <p className="py-[12px] bg-white rounded-[24px] text-heading/s text-gray-900 flex flex-col w-fit h-[48px]">
                    <img src="/loading.gif" alt="loading" className="w-24 h-24 -mt-10" />
                  </p>
                )}
                {aiLoading && (
                  <p className="px-[24px] py-[12px] bg-white rounded-[24px] text-heading/s text-gray-900 whitespace-pre-wrap flex flex-col items-center text-center">
                    <span className="whitespace-pre-wrap">{`결과를 가져오는 중이에요\n잠시만 기다려주세요`}</span>
                    <span className="mt-4">
                      <Oval
                        visible={true}
                        height="24"
                        strokeWidth="6"
                        width="24"
                        color="#089E83"
                        secondaryColor="#089e8333"
                      />
                    </span>
                  </p>
                )}
              </div>
            </div>
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
        <span className="shrink-0">
          <IconBunong />
        </span>
        <div className="flex flex-col gap-[8px]">
          <span className="text-body/m/500 text-gray-600">부농이</span>
          <p className="px-[24px] py-[12px] bg-white rounded-[24px] text-heading/s text-gray-900">
            안녕하세요 저는 여러분의 마케팅을 도와줄 부농이에요 :)
          </p>
          <p className="px-[24px] py-[12px] bg-white rounded-[24px] text-heading/s text-gray-900 flex flex-col w-fit">
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
        <span className="shrink-0">
          <IconBunong />
        </span>
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
        <span className="shrink-0">
          <IconBunong />
        </span>
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
        <span className="shrink-0">
          <IconBunong />
        </span>
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

  if (presetType === "text") {
    return (
      <div className="flex gap-[8px]">
        <span className="shrink-0">
          <IconBunong />
        </span>
        <div className="flex flex-col gap-[8px]">
          <span className="text-body/m/500 text-gray-600">부농이</span>
          <p className="px-[24px] py-[12px] bg-white rounded-[24px] text-heading/s text-gray-900 whitespace-pre-wrap flex flex-col">
            {message}
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
