"use client";

import { AILoadingModal, BrandForm, LoadingModal } from "@/components";
import { Brand, Farm, FarmDTO, toBrandDTO, toFarm } from "@/domain";
import { IconEco, IconRefresh } from "@/icons";
import { IconCheckCircleFill } from "@/icons/check-circle-fill";
import { httpClient } from "@/service/http-client";
import { useBrandingPreferenceStore } from "@/store";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useLayoutEffect, useState } from "react";
import toast from "react-hot-toast";

export default function Page(props: { params: { id: string } }) {
  const router = useRouter();
  const { preference } = useBrandingPreferenceStore();

  const { data: farm, isLoading } = useQuery({
    queryKey: ["get_farm"],
    queryFn: () => httpClient.get<FarmDTO>(`/api/v1/farm/get_farm?farm_id=${props.params.id}`),
  });

  const [showLoadingModal, setShowLoadingModal] = useState(false);
  const [form, setForm] = useState<Brand>({
    name: "",
    description: "",
    feature: "",
  });

  const handleNameChange = (name: string) => {
    setForm((prev) => ({ ...prev, name }));
  };

  const handleDescriptionChange = (description: string) => {
    setForm((prev) => ({ ...prev, description }));
  };

  const handleFeatureChange = (feature: string) => {
    setForm((prev) => ({ ...prev, feature }));
  };

  const handlePrevClick = () => {
    router.back();
  };

  const handleRegenerateClick = async () => {
    setShowLoadingModal(true);
    try {
      const data = await httpClient.post<Farm, FarmDTO>("/api/v1/farm/save_brand", toFarm(form, preference));
      toast(
        <span className="flex gap-[8px] h-[40px] items-center w-full bg-black rounded-[6px] px-[16px]">
          <IconCheckCircleFill />
          <span>AI를 통해 추천 정보가 자동 입력되었습니다.</span>
        </span>
      );
      setForm({ name: data.name, description: data.summary, feature: data.description });
    } catch (error) {
      console.error(error);
    }
  };

  const handleCompleteClick = async () => {
    if (!farm) {
      return;
    }

    try {
      const data = await httpClient.post<FarmDTO, FarmDTO>("/api/v1/farm/save_brand", {
        ...farm,
        ...toBrandDTO(form),
      });
      toast(
        <span className="flex gap-[8px] h-[40px] items-center w-full bg-black rounded-[6px] px-[16px]">
          <IconCheckCircleFill />
          <span>내 농장 브랜딩 정보가 저장되었습니다.</span>
        </span>
      );
      router.push(`/app/branding/${data?.farm_id}`);
      router.refresh();
    } catch (error) {
      toast.error("브랜딩 정보 저장에 실패했습니다. 다시 시도해주세요.");
    }
  };

  useLayoutEffect(() => {
    if (farm) {
      setForm({ name: farm.name, description: farm.summary, feature: farm.description });
    }
  }, [farm]);

  return isLoading ? (
    <LoadingModal />
  ) : (
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
          <div className="flex justify-between itemx-center">
            <span className="text-heading/s text-gray-500">내 농장 정보 수정</span>

            <button className="flex gap-[8px] items-center" onClick={handleRegenerateClick}>
              <IconRefresh />
              <span className="text-gray-600 text-body/s/500">다시 생성하기</span>
            </button>
          </div>

          <h2 className="mt-[8px] whitespace-pre-line text-heading/xl">{`브랜딩 정보를 수정해주세요`}</h2>
          <h4 className="text-gray-500 text-body/m/500 mt-[8px]">작성 완료 이후에도 수정이 가능해요</h4>

          <BrandForm
            form={form}
            onNameChange={handleNameChange}
            onDescriptionChange={handleDescriptionChange}
            onFeatureChange={handleFeatureChange}
          />

          <div className="bg-white py-2 w-full sticky bottom-0 flex gap-3 mt-auto">
            <button
              className="h-[48px] bg-white border border-gray-300 hover:bg-gray-50 flex justify-center items-center rounded-[6px] w-[240px] text-heading/m"
              onClick={handlePrevClick}
            >
              돌아가기
            </button>

            <button
              onClick={handleCompleteClick}
              className="h-[48px] bg-[#089E83] hover:bg-[#028066] grow text-white text-heading/m flex justify-center items-center rounded-[6px]"
            >
              완료
            </button>
          </div>
        </section>
      </div>

      {showLoadingModal && <AILoadingModal />}
    </>
  );
}
