"use client";

import { IconDelete, IconEditSquare, IconHelp, IconMoreVertical } from "@/icons";
import Link from "next/link";
import { useState } from "react";
import { BrandDeleteModal } from "./brand-delete-modal";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { IconCheckCircleFill } from "@/icons/check-circle-fill";

export const BrandHeader = () => {
  const router = useRouter();
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const handleDeleteClick = () => {
    setShowConfirmModal(true);
  };

  const handleConfirmClick = () => {
    toast(
      <span className="flex gap-[8px] h-[40px] items-center w-full bg-[#F43F5E] rounded-[6px] px-[16px]">
        <span className="text-[#F43F5E]">
          <IconCheckCircleFill />
        </span>
        <span>농장이 삭제되었습니다.</span>
      </span>
    );
    router.replace("/main");
  };

  const handleCancelClick = () => {
    setShowConfirmModal(false);
  };

  return (
    <>
      <div className="h-[80px] border-b border-gray-200 px-[24px] flex items-center justify-between shrink-0">
        <div className="flex items-center gap-[16px]">
          <div className="w-[48px] h-[48px] rounded-full bg-gray-300"></div>
          <div className="flex flex-col gap-[4px]">
            <span className="text-gray-500 flex items-center gap-[4px]">
              <span className="text-body/xs/500">Lv. 새싹</span>
              <span className="relative">
                <span className="peer">
                  <IconHelp />
                </span>

                <div className="hidden peer-hover:block mb-2 w-[177px] rounded-[8px] text-body/xs/400 text-gray-600 absolute bg-white shadow-[0_4px_6px_-1px_rgb(0,0,0,0.1),0_2px_6px_-1px_rgb(0,0,0,0.06)] bottom-full left-0 py-[12px] px-[20px] whitespace-pre-wrap -translate-x-1/2 text-center">
                  {`내 농장의 콘텐츠 개수에 따라\n농장 레벨이 달라집니다\n*새싹-꽃-열매`}
                  <div className="absolute left-1/2 border-[5px] top-full w-0 h-0 border-t-white border-l-transparent border-r-transparent border-b-transparent"></div>
                </div>
              </span>
            </span>
            <span className="text-heading/m text-gray-800">호호 농장</span>
          </div>
        </div>

        <div className="flex items-center gap-[16px]">
          <div className="w-[200px] flex flex-col gap-[8px]">
            <div className="flex justify-between items-center">
              <span className="text-gray-800 text-body/s/500">다음 레벨까지</span>
              <span>
                <span className="text-heading/s text-[#089E83]">0</span>{" "}
                <span className="text-body/m/500 text-gray-500">/5개</span>
              </span>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-[8px]"></div>
          </div>

          <button className="w-[36px] h-[36px] rounded-[6px] hover:bg-gray-100 focus:bg-gray-100 flex justify-center items-center relative group">
            <IconMoreVertical />
            <ul className="hidden rounded-[8px] group-has-[*:active]:block group-focus:block w-[160px] bg-white shadow-[0_4px_10px_0_rgba(51,51,51,0.1)] p-[8px] absolute top-full right-0">
              <li>
                <Link
                  href="/app/branding/1/edit"
                  className="h-[36px] flex items-center p-[6px] text-black text-body/m/400 gap-[7px]"
                >
                  <IconEditSquare size={16} />
                  <span>브랜딩 정보 수정</span>
                </Link>
              </li>

              <li
                className="h-[36px] w-full flex items-center p-[6px] text-[#F43F5E] text-body/m/500 gap-[7px] border-t border-gray-200"
                onClick={handleDeleteClick}
              >
                <IconDelete />
                <span>농장 삭제</span>
              </li>
            </ul>
          </button>
        </div>
      </div>

      {showConfirmModal && <BrandDeleteModal onConfirm={handleConfirmClick} onCancel={handleCancelClick} />}
    </>
  );
};
