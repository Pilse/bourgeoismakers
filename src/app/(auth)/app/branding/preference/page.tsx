"use client";

import Link from "next/link";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { AILoadingModal, BrandingPreferenceForm } from "@/components";
import {
  BrandDTO,
  BrandingPreference,
  BrandingPreferenceDTO,
  isPreferenceValid,
  toBrand,
  toBrandPreferenceDTO,
} from "@/domain";
import { IconArrowForward, IconEco, IconPalatte } from "@/icons";
import { useBrandStore, useBrandingPreferenceStore } from "@/store";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { IconCheckCircleFill } from "@/icons/check-circle-fill";
import { httpClient } from "@/service/http-client";

export default function Page() {
  const router = useRouter();
  const { setPreference, preference } = useBrandingPreferenceStore();
  const { setBrand } = useBrandStore();
  const [showLoadingModal, setShowLoadingModal] = useState(false);
  const [form, setForm] = useState<BrandingPreference>(preference);

  const handleSnsChange = (sns: string) => {
    setForm((prev) => ({ ...prev, sns }));
  };

  const handleItemChange = (item: string) => {
    setForm((prev) => ({ ...prev, item }));
  };

  const handleVibeChange = (vibe: { type: "INPUT" | "OPTION"; value: string }) => {
    if (form.vibe?.type === "OPTION" && vibe.type === "INPUT") {
      vibe.value = "";
    }

    setForm((prev) => ({ ...prev, vibe }));
  };

  const handleStrengthChange = (strength: string) => {
    const strengths = form.strength;
    if (strengths === null) {
      setForm((prev) => ({ ...prev, strength: [strength] }));
      return;
    }

    if (strengths.includes(strength)) {
      setForm((prev) => ({ ...prev, strength: strengths.filter((s) => s !== strength) }));
      return;
    }

    if (strengths.length >= 3) {
      return;
    }

    setForm((prev) => ({ ...prev, strength: [...strengths, strength] }));
  };

  const handleSubmit = async () => {
    setPreference(form);
    setShowLoadingModal(true);
    try {
      const data = await httpClient.post<BrandingPreferenceDTO, BrandDTO>(
        "/api/v1/farm/generate_brand",
        toBrandPreferenceDTO(form)
      );
      toast(
        <span className="flex gap-[8px] h-[40px] items-center w-full bg-black rounded-[6px] px-[16px]">
          <IconCheckCircleFill />
          <span>AI를 통해 추천 정보가 자동 입력되었습니다.</span>
        </span>
      );
      setBrand(toBrand(data));
      router.refresh();
      router.push("/app/branding/result");
    } catch (error) {
      toast.error("AI 브랜딩에 실패했습니다. 다시 시도해주세요.");
    }
    setShowLoadingModal(false);
  };

  const isFormValid = isPreferenceValid(form);

  return (
    <>
      <div className="h-full flex">
        <aside className="w-[416px] h-full bg-[#F9FAFB]">
          <ul className="flex flex-col gap-4 p-[16px]">
            <Link
              href=""
              className="text-heading/s bg-[#e5e7eb] h-[40px] rounded-[8px] p-[8px] flex items-center gap-[8px]"
            >
              <IconEco /> 농장 브랜딩
            </Link>
          </ul>
        </aside>

        <section className="w-[1024px] h-full bg-[white] py-[40px] px-[46px] flex flex-col shadow-[0_5px_20px_0_rgb(50,50,50,0.1)]">
          <span className="text-heading/s text-gray-500">내 농장 정보 입력</span>
          <h2 className="mt-[8px] whitespace-pre-line text-heading/xl">{`반가워요! 브랜딩 추천을 위해\n당신의 농장에 대해 알려주세요`}</h2>
          <BrandingPreferenceForm
            form={form}
            onSnsChange={handleSnsChange}
            onItemChange={handleItemChange}
            onVibeChange={handleVibeChange}
            onStrengthChange={handleStrengthChange}
          />

          <button
            className={twMerge(
              "h-[48px] bg-[#089E83] hover:bg-[#028066] w-full text-white flex gap-[8px] justify-center items-center mt-auto shrink-0 rounded-[6px]",
              !isFormValid && "bg-gray-100 text-gray-300 hover:bg-gray-100 cursor-default"
            )}
            onClick={handleSubmit}
            disabled={!isFormValid}
          >
            <IconPalatte />
            <span className={twMerge(!isFormValid && "text-gray-400")}>이 정보로 AI 브랜딩 진행</span>
            <IconArrowForward />
          </button>
        </section>
      </div>

      {showLoadingModal && <AILoadingModal />}
    </>
  );
}
