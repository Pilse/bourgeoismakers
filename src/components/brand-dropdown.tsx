import { IconAdd } from "@/icons";
import IconArrowDropDown from "@/icons/arrow-drop-down";
import Link from "next/link";

export const BrandDropdown = () => {
  return (
    <button className="text-heading/l flex items-center gap-[4px] relative group">
      <span>호호 농장</span>
      <IconArrowDropDown />

      <ul className="hidden rounded-[8px] -mt-3 group-has-[*:active]:block group-focus:block w-[160px] bg-white shadow-[0_4px_10px_0_rgba(51,51,51,0.1)] p-[8px] absolute top-full left-0">
        <li className="h-[36px] w-full flex items-center p-[6px] gap-[7px]">
          <Link
            href="/app/branding/1"
            className="h-[36px] flex items-center p-[6px] text-black text-body/m/400 gap-[7px]"
          >
            <span className="text-body/m/400">호호 농장</span>
          </Link>
        </li>

        <li className="h-[36px] w-full flex items-center p-[6px] gap-[7px]">
          <Link
            href="/app/branding/1"
            className="h-[36px] flex items-center p-[6px] text-black text-body/m/400 gap-[7px]"
          >
            <span className="text-body/m/400">희희 농장</span>
          </Link>
        </li>

        <li className="h-[36px] w-full flex items-center p-[6px gap-[7px] border-t border-gray-200">
          <Link
            href="/app/branding/preference"
            className="h-[36px] flex items-center p-[6px] text-[#089E83] text-body/m/400 gap-[8px]"
          >
            <IconAdd />
            <span className="text-heading/s">새 농장 생성</span>
          </Link>
        </li>
      </ul>
    </button>
  );
};
