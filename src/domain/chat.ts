export type CHAT_STATUS = "COMPLETED" | "IN_PROGRESS" | "NOT_COMPLETED";
export type CHAT_PRESET_TYPE = "item" | "contents" | "events" | "contacts" | "keywords" | "text" | "result";

export type ChatListItem = {
  chatId: string;
  title: string;
  description: string;
};

export type ChatDTO = {
  chatId: string;
  botMessage: string;
  message: string;
  completionTrigger: boolean;
};

export type ChatRes = {
  assistantMessage: {
    content: string;
    validationResult: boolean;
  };
  scenarioStep: number;
  status: true;
};

export type Content = {
  role: "bot" | "user";
  content: string;
};

export const chatStatus: Record<Exclude<CHAT_PRESET_TYPE, "text" | "result">, CHAT_STATUS> = {
  item: "IN_PROGRESS",
  contents: "NOT_COMPLETED",
  events: "NOT_COMPLETED",
  contacts: "NOT_COMPLETED",
  keywords: "NOT_COMPLETED",
};

export const statusOrder: Exclude<CHAT_PRESET_TYPE, "text">[] = [
  "item",
  "contents",
  "events",
  "contacts",
  "keywords",
];

export const chatPreset: Record<
  Exclude<CHAT_PRESET_TYPE, "text">,
  { type: "bot"; preset: Exclude<CHAT_PRESET_TYPE, "text">; message: string }
> = {
  item: {
    type: "bot",
    preset: "item",
    message: "어떤 품목을 홍보하고 싶은지 알려주세요!",
  },
  contents: {
    type: "bot",
    preset: "contents",
    message: "만들고 싶은 콘텐츠 유형은 무엇인가요?",
  },
  events: {
    type: "bot",
    preset: "events",
    message: "현재 진행 중인 이벤트나 할인이 있나요? 행사 내용에 대해 더 자세히 알려주세요.",
  },
  contacts: {
    type: "bot",
    preset: "contacts",
    message: "구매처 (예. URL, 연락처 등)을 추가할까요? 추가하려는 구매처를 모두 알려주세요.",
  },
  keywords: {
    type: "bot",
    preset: "keywords",
    message: "들어갔으면 하는 문구가 있나요? (예. 미친 당도) 원하는 문구를 알려주세요.",
  },
  result: {
    type: "bot",
    preset: "result",
    message: "추가로 변경하고 싶은 사항이 있으시면 채팅에 입력해주세요!(ex. 말투 혹은 길이 등)",
  },
};
