"use client";

interface IContentDelteModalProps {
  onConfirm: () => void;
  onCancel: () => void;
}

export const ContentDeleteModal = ({ onConfirm, onCancel }: IContentDelteModalProps) => {
  return (
    <div className="absolute top-0 left-0 bg-[#F0F0F0]/85 w-full h-full flex justify-center items-center flex-col">
      <div className="w-[450px] rounded-[16px]  bg-white shadow-[0_4px_6px_-1px_rgb(0,0,0,0.1),0_2px_6px_-1px_rgb(0,0,0,0.06)] p-[32px]">
        <h3 className="text-heading/l">정말 콘텐츠 내역을 삭제하시겠어요?</h3>
        <p className="mt-[12px] text-gray-700 text-body/l/400">삭제하신 콘텐츠 정보는 복구할 수 없어요.</p>

        <div className="flex gap-[8px] ml-auto mt-[24px] w-fit">
          <button
            className="border border-gray-300 rounded-[6px] text-heading/s h-[40px] px-[16px] hover:bg-gray-50"
            onClick={onCancel}
          >
            취소
          </button>
          <button
            className="bg-[#F43F5E] hover:bg-[#e11d48] text-heading/s text-white rounded-[6px] h-[40px] px-[16px]"
            onClick={onConfirm}
          >
            삭제
          </button>
        </div>
      </div>
    </div>
  );
};
