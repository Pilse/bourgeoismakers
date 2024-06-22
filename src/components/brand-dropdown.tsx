"use client";

import { Farm } from "@/domain";
import { IconAdd } from "@/icons";
import IconArrowDropDown from "@/icons/arrow-drop-down";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface IBrandDropdownProps {
  currentFarm?: Farm;
  farmList?: { myFarm: { name: string; contentCount: number; id: string }[] };
}

export const BrandDropdown = ({ currentFarm, farmList }: IBrandDropdownProps) => {
  return (
    <button className="text-heading/l flex items-center gap-[4px] relative group">
      <span>{currentFarm?.name ?? "-"}</span>
      <IconArrowDropDown />

      <ul className="hidden rounded-[8px] -mt-3 group-has-[*:active]:block group-focus:block w-[160px] bg-white shadow-[0_4px_10px_0_rgba(51,51,51,0.1)] p-[8px] absolute top-full left-0">
        {farmList?.myFarm.map((farm) => (
          <li className="h-[36px] w-full flex items-center p-[6px] gap-[7px]" key={farm.id}>
            <Link
              href={`/app/branding/${farm.id}`}
              className="h-[36px] flex items-center p-[6px] text-black text-body/m/400 gap-[7px]"
            >
              <span className="text-body/m/400">{farm.name}</span>
            </Link>
          </li>
        ))}

        {farmList && farmList?.myFarm.length < 3 && (
          <li
            className={twMerge(
              "h-[36px] w-full flex items-center p-[6px gap-[7px] border-t border-gray-200",
              farmList?.myFarm.length === 0 && "border-none"
            )}
          >
            <Link
              href="/app/branding/preference"
              className="h-[36px] flex items-center p-[6px] text-[#089E83] text-body/m/400 gap-[8px]"
            >
              <IconAdd />
              <span className="text-heading/s">새 농장 생성</span>
            </Link>
          </li>
        )}
      </ul>
    </button>
  );
};
