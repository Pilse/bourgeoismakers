"use client";

import { ChatListItem } from "@/domain";
import { IconDelete, IconHistory, IconMoreVertical } from "@/icons";
import Link from "next/link";
import { useState } from "react";
import { ContentDeleteModal } from "./content-delete-modal";
import { httpClient } from "@/service/http-client";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";

interface IContentListProps {
  chats?: { chatList: ChatListItem[] };
  brandId: string;
  id?: string;
}

export const ContentList = ({ chats, brandId, id }: IContentListProps) => {
  const router = useRouter();
  const [deleteChatId, setDeleteChatId] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);

  const onConfirm = async () => {
    if (!deleteChatId) {
      return;
    }

    try {
      await httpClient.delete(`/api/v1/contents/delete_chat?chatId=${deleteChatId}`);
      const idx = chats?.chatList.findIndex((chat) => chat.chatId === deleteChatId);

      if (idx && idx - 1 >= 0 && chats?.chatList?.[idx - 1].chatId) {
        router.replace(`/app/branding/${brandId}/contents/${chats?.chatList?.[idx - 1].chatId}`);
      } else {
        router.replace(`/app/branding/${brandId}/contents/new`);
      }
      router.refresh();
    } catch (error) {
      toast.error("삭제중 에러가 발생했습니다. 다시 시도해주세요");
    }

    setShowModal(false);
    setDeleteChatId(null);
  };

  const onCancel = () => {
    setShowModal(false);
  };

  return (
    <>
      <ul className="flex flex-col gap-[8px] p-[16px] overflow-y-auto h-full">
        <span className="flex gap-[4px] items-center">
          <IconHistory />
          <span className="text-gray-500 text-heading/xs">콘텐츠 생성 내역</span>
        </span>
        {chats?.chatList.map((chat) => (
          <li
            key={chat.chatId}
            className={twMerge(
              "hover:bg-[#F3F4F6] h-[54px] flex px-[8px] py-[4px] rounded-[8px] gap-[8px] items-center justify-between",
              id === chat.chatId && "bg-[#F3F4F6]"
            )}
          >
            <Link
              href={`/app/branding/${brandId}/contents/${chat.chatId}`}
              className="h-full flex flex-col justify-center gap-[2px] max-w-[240px]"
            >
              <span className="text-heading/xs truncate">{chat.title}</span>
              <span className="text-body/xs/400 text-gray-500">{chat.description || "- / -"}</span>
            </Link>

            <button className="relative group">
              <IconMoreVertical />

              <ul className="hidden rounded-[8px] group-has-[*:active]:block group-focus:block w-[160px] bg-white shadow-[0_4px_10px_0_rgba(51,51,51,0.1)] p-[8px] absolute top-full right-0">
                <li
                  className="h-[36px] w-full flex items-center p-[6px] text-[#F43F5E] text-body/m/500 gap-[7px] cursor-pointer"
                  onClick={() => {
                    setShowModal(true);
                    setDeleteChatId(chat.chatId);
                  }}
                >
                  <IconDelete />
                  <span>채팅 삭제</span>
                </li>
              </ul>
            </button>
          </li>
        ))}
      </ul>

      {showModal && <ContentDeleteModal onConfirm={onConfirm} onCancel={onCancel} />}
    </>
  );
};
