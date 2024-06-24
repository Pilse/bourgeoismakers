"use client";

import { IconAdd } from "@/icons";
import { useForceRerenderStore } from "@/store";
import { useRouter } from "next/navigation";

interface INewButtonButtonProps {
  brandId: string;
}

export const NewButtonButton = ({ brandId }: INewButtonButtonProps) => {
  const router = useRouter();
  const { rerender } = useForceRerenderStore();

  const handleClick = () => {
    rerender();
    router.push(`/app/branding/${brandId}/contents/new`);
  };

  return (
    <button
      onClick={handleClick}
      className="bg-primary h-[40px] hover:bg-[#028066] text-white flex items-center justify-center text-heading/s rounded-[6px] gap-[4px]]"
    >
      <IconAdd size={20} />
      <span>새 콘텐츠 만들기</span>
    </button>
  );
};
