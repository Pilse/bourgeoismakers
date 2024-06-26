"use client";

import { BrandingPreference } from "@/domain";
import { IconSolidCheck } from "@/icons";
import { twMerge } from "tailwind-merge";

interface IBrandingPreferenceFormProps {
  form: BrandingPreference;
  error?: string | null;
  onSnsChange: (sns: string) => void;
  onItemChange: (item: string) => void;
  onVibeChange: (vibe: { type: "INPUT" | "OPTION"; value: string }) => void;
  onStrengthChange: (strength: string) => void;
}

export const BrandingPreferenceForm = ({
  form,
  onSnsChange,
  onItemChange,
  onVibeChange,
  onStrengthChange,
  error,
}: IBrandingPreferenceFormProps) => {
  return (
    <form className="mt-[32px] overflow-auto pb-[24px]">
      <div className="flex flex-col gap-[8px]">
        <label className="flex items-start gap-[4px]">
          <span className="text-heading/xs text-gray-600">1. 주요 활동 SNS</span>
          <span className="text-[#F43F5E] text-[12px] leading-[16px] font-semibold">*</span>
        </label>

        <div className="flex gap-[8px] mt-[8px]">
          <label
            className={twMerge(
              "flex h-[56px] border border-gray-300 rounded-[8px] items-center px-[16px] gap-[8px] grow cursor-pointer",
              form.sns === "instagram" && "bg-[#089E83]/10 border-[#089E83] border-[2px]"
            )}
            onClick={() => onSnsChange("instagram")}
          >
            <div
              className={twMerge(
                "rounded-full  border border-gray-300 bg-white w-[16px] h-[16px] flex items-center justify-center",
                form.sns === "instagram" && "bg-[#089E83] border-none"
              )}
            >
              <div className="rounded-full w-[6px] h-[6px] bg-white"></div>
            </div>
            <span>인스타그램</span>
          </label>

          <label
            className={twMerge(
              "flex h-[56px] border border-gray-300 rounded-[8px] items-center px-[16px] gap-[8px] grow cursor-pointer",
              form.sns === "naver-band" && "bg-[#089E83]/10 border-[#089E83] border-[2px]"
            )}
            onClick={() => onSnsChange("naver-band")}
          >
            <div
              className={twMerge(
                "rounded-full  border border-gray-300 bg-white w-[16px] h-[16px] flex items-center justify-center",
                form.sns === "naver-band" && "bg-[#089E83] border-none"
              )}
            >
              <div className="rounded-full w-[6px] h-[6px] bg-white"></div>
            </div>
            <span>네이버 밴드</span>
          </label>
        </div>
      </div>

      <div className="flex flex-col gap-[8px] mt-[32px]">
        <label className="flex items-start gap-[4px]">
          <span className="text-heading/xs text-gray-600">
            2. 우리 농장에서 생산하는 품목을 정확하게 입력해주세요
          </span>
          <span className="text-[#F43F5E] text-[12px] leading-[16px] font-semibold">*</span>
        </label>

        <div className="flex flex-col gap-1">
          <input
            type="text"
            placeholder="여러 개인 경우 쉼표로 구분해주세요 ex) 고구마, 감자"
            value={form.item ?? ""}
            onChange={(e) => onItemChange(e.target.value)}
            className={twMerge(
              "h-[36px] w-[320px] rounded-[6px] border border-gray-300 px-[8px] text-body/s/400 placeholder:text-gray-500 focus:border-black",
              error && "border-[#F43F5E]"
            )}
          />
          {error && <span className="text-[#F43F5E] text-body/xs/400">{error}</span>}
        </div>
      </div>

      <div className="flex flex-col gap-[8px] mt-[32px]">
        <label className="flex items-start gap-[4px]">
          <span className="text-heading/xs text-gray-600">
            3. 내가 원하는 내 농장의 분위기는 어떤가요? (최대 1개)
          </span>
          <span className="text-[#F43F5E] text-[12px] leading-[16px] font-semibold">*</span>
        </label>

        <ul className="flex flex-col gap-[8px] mt-[16px]">
          <li className="flex items-center gap-[8px]">
            <div
              className={twMerge(
                "w-[16px] h-[16px] rounded-[2px] border border-gray-300 cursor-pointer flex justify-center items-center",
                form.vibe?.value === "bubbly" && "bg-[#089E83] border-none"
              )}
              onClick={() => onVibeChange({ type: "OPTION", value: "bubbly" })}
            >
              <IconSolidCheck />
            </div>

            <label
              className="text-body/m/500 cursor-pointer"
              onClick={() => onVibeChange({ type: "OPTION", value: "bubbly" })}
            >
              통통 튄다
            </label>
          </li>

          <li className="flex items-center gap-[8px]">
            <div
              className={twMerge(
                "w-[16px] h-[16px] rounded-[2px] border border-gray-300 cursor-pointer flex justify-center items-center",
                form.vibe?.value === "professional" && "bg-[#089E83] border-none"
              )}
              onClick={() => onVibeChange({ type: "OPTION", value: "professional" })}
            >
              <IconSolidCheck />
            </div>
            <label
              className="text-body/m/500 cursor-pointer"
              onClick={() => onVibeChange({ type: "OPTION", value: "professional" })}
            >
              전문적이다
            </label>
          </li>

          <li className="flex items-center gap-[8px]">
            <div
              className={twMerge(
                "w-[16px] h-[16px] rounded-[2px] border border-gray-300 cursor-pointer flex justify-center items-center",
                form.vibe?.value === "approachable" && "bg-[#089E83] border-none"
              )}
              onClick={() => onVibeChange({ type: "OPTION", value: "approachable" })}
            >
              <IconSolidCheck />
            </div>
            <label
              className="text-body/m/500 cursor-pointer"
              onClick={() => onVibeChange({ type: "OPTION", value: "approachable" })}
            >
              친근하다
            </label>
          </li>

          <li className="flex items-center gap-[8px]">
            <div
              className={twMerge(
                "w-[16px] h-[16px] rounded-[2px] border border-gray-300 cursor-pointer flex justify-center items-center",
                form.vibe?.type === "INPUT" && "bg-[#089E83] border-none"
              )}
              onClick={() => onVibeChange({ type: "INPUT", value: form.vibe?.value ?? "" })}
            >
              <IconSolidCheck />
            </div>

            <label
              className="text-body/m/500 cursor-pointer"
              onClick={() => onVibeChange({ type: "INPUT", value: form.vibe?.value ?? "" })}
            >
              직접 입력
            </label>
          </li>

          {form.vibe?.type === "INPUT" && (
            <input
              type="text"
              value={form.vibe?.value}
              onChange={(e) => onVibeChange({ type: "INPUT", value: e.target.value })}
              className="ml-[24px] h-[36px] w-[320px] rounded-[6px] border border-gray-300 px-[8px] text-body/s/400 placeholder:text-gray-500 focus:border-black"
            />
          )}
        </ul>
      </div>

      <div className="flex flex-col gap-[8px] mt-[32px]">
        <label className="flex items-end gap-[4px]">
          <span className="text-heading/xs text-gray-600">4. 우리 농장의 강점은 무엇인가요? (최대 3개)</span>
          <span className="text-[#F43F5E] text-[12px] leading-[16px] font-semibold">*</span>
        </label>

        <ul className="flex flex-col gap-[8px] mt-[16px]">
          <li className="flex items-center gap-[8px]">
            <div
              className={twMerge(
                "w-[16px] h-[16px] rounded-[2px] border border-gray-300 cursor-pointer flex justify-center items-center",
                form.strength?.includes("environmentally friendly") && "bg-[#089E83] border-none"
              )}
              onClick={() => onStrengthChange("environmentally friendly")}
            >
              <IconSolidCheck />
            </div>

            <label
              className="text-body/m/500 cursor-pointer"
              onClick={() => onStrengthChange("environmentally friendly")}
            >
              친환경 농법
            </label>
          </li>

          <li className="flex items-center gap-[8px]">
            <div
              className={twMerge(
                "w-[16px] h-[16px] rounded-[2px] border border-gray-300 cursor-pointer flex justify-center items-center",
                form.strength?.includes("organic") && "bg-[#089E83] border-none"
              )}
              onClick={() => onStrengthChange("organic")}
            >
              <IconSolidCheck />
            </div>

            <label className="text-body/m/500 cursor-pointer" onClick={() => onStrengthChange("organic")}>
              유기농
            </label>
          </li>

          <li className="flex items-center gap-[8px]">
            <div
              className={twMerge(
                "w-[16px] h-[16px] rounded-[2px] border border-gray-300 cursor-pointer flex justify-center items-center",
                form.strength?.includes("sweetness") && "bg-[#089E83] border-none"
              )}
              onClick={() => onStrengthChange("sweetness")}
            >
              <IconSolidCheck />
            </div>

            <label className="text-body/m/500 cursor-pointer" onClick={() => onStrengthChange("sweetness")}>
              뛰어난 당도
            </label>
          </li>

          <li className="flex items-center gap-[8px]">
            <div
              className={twMerge(
                "w-[16px] h-[16px] rounded-[2px] border border-gray-300 cursor-pointer flex justify-center items-center",
                form.strength?.includes("fertilizer") && "bg-[#089E83] border-none"
              )}
              onClick={() => onStrengthChange("fertilizer")}
            >
              <IconSolidCheck />
            </div>

            <label className="text-body/m/500 cursor-pointer" onClick={() => onStrengthChange("fertilizer")}>
              좋은 비료 사용
            </label>
          </li>

          <li className="flex items-center gap-[8px]">
            <div
              className={twMerge(
                "w-[16px] h-[16px] rounded-[2px] border border-gray-300 cursor-pointer flex justify-center items-center",
                form.strength?.includes("shipping") && "bg-[#089E83] border-none"
              )}
              onClick={() => onStrengthChange("shipping")}
            >
              <IconSolidCheck />
            </div>

            <label className="text-body/m/500 cursor-pointer" onClick={() => onStrengthChange("shipping")}>
              빠른 배송
            </label>
          </li>
        </ul>
      </div>
    </form>
  );
};
