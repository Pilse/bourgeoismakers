"use client";

import { Brand } from "@/domain";

interface IBrandFormProps {
  form: Brand;
  onNameChange: (name: string) => void;
  onDescriptionChange: (description: string) => void;
  onFeatureChange: (feature: string) => void;
}

export const BrandForm = ({ form, onNameChange, onDescriptionChange, onFeatureChange }: IBrandFormProps) => {
  return (
    <form className="mt-[32px] overflow-auto pb-[24px]">
      <div className="flex flex-col gap-[8px]">
        <label className="flex items-start gap-[4px]">
          <span className="text-heading/xs text-gray-600">내 농장 이름</span>
          <span className="text-[#F43F5E] text-[12px] leading-[16px] font-semibold">*</span>
        </label>

        <input
          type="text"
          placeholder="여러 개인 경우 쉼표로 구분해주세요 ex) 고구마, 감자"
          value={form.name}
          onChange={(e) => onNameChange(e.target.value)}
          className="h-[36px] w-[320px] rounded-[6px] border border-gray-300 px-[8px] text-body/s/400 placeholder:text-gray-500 focus:border-black"
        />
      </div>

      <div className="flex flex-col gap-[8px] mt-[32px]">
        <label className="flex items-start gap-[4px]">
          <span className="text-heading/xs text-gray-600">한 줄 소개</span>
          <span className="text-[#F43F5E] text-[12px] leading-[16px] font-semibold">*</span>
        </label>

        <input
          type="text"
          placeholder="여러 개인 경우 쉼표로 구분해주세요 ex) 고구마, 감자"
          value={form.description}
          onChange={(e) => onDescriptionChange(e.target.value)}
          className="h-[36px] w-full rounded-[6px] border border-gray-300 px-[8px] text-body/s/400 placeholder:text-gray-500 focus:border-black"
        />
      </div>

      <div className="flex flex-col gap-[8px] mt-[32px]">
        <label className="flex items-start gap-[4px]">
          <span className="text-heading/xs text-gray-600">우리 농장의 특징</span>
          <span className="text-[#F43F5E] text-[12px] leading-[16px] font-semibold">*</span>
        </label>

        <textarea
          placeholder="여러 개인 경우 쉼표로 구분해주세요 ex) 고구마, 감자"
          value={form.feature}
          onChange={(e) => onFeatureChange(e.target.value)}
          className="w-full rounded-[6px] border border-gray-300 h-[164px] p-[12px] text-body/s/400 placeholder:text-gray-500 focus:border-black"
        />
      </div>
    </form>
  );
};
