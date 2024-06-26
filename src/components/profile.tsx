"use client";

import { User } from "@/domain";
import { IconKeyboardArrowDown, IconLogout } from "@/icons";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

interface IProfileProps {
  user: User;
}

export const Profile = ({ user }: IProfileProps) => {
  const router = useRouter();

  const handleLogoutClick = () => {
    Cookies.remove("jwt");
    router.refresh();
  };

  return (
    <>
      <button className="flex gap-[8px] height-[36px] items-center group relative">
        <span className="text-body/m/500">{user.name}</span>
        <IconKeyboardArrowDown />

        <ul className="hidden rounded-[8px] group-focus:block w-[160px] bg-white shadow-[0_4px_10px_0_rgba(51,51,51,0.1)] p-[8px] absolute top-full right-0 ">
          <li
            className="h-[36px] flex items-center p-[6px] text-[#F43F5E] text-heading/s gap-[7px]"
            onClick={handleLogoutClick}
          >
            <IconLogout />
            <span>로그아웃</span>
          </li>
        </ul>
      </button>
    </>
  );
};
