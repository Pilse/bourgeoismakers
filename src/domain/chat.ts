export type CHAT_STATUS = "COMPLETED" | "IN_PROGRESS" | "NOT_COMPLETED";
export type CHAT_PRESET_TYPE = "item" | "contents" | "events" | "contacts" | "keywords" | "text";

export const chatStatus: Record<Exclude<CHAT_PRESET_TYPE, "text">, CHAT_STATUS> = {
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
