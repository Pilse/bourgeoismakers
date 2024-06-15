import { IconKeyboardArrowDown, IconLogout } from "@/icons";

export const Profile = () => {
  return (
    <>
      <button className="flex gap-[8px] height-[36px] items-center group relative">
        <div className="w-[24px] h-[24px] rounded-full bg-[#f59e0b]"></div>
        <span className="text-body/m/500">내 프로필</span>
        <IconKeyboardArrowDown />

        <ul className="hidden rounded-[8px] group-focus:block w-[160px] bg-white shadow-[0_4px_10px_0_rgba(51,51,51,0.1)] p-[8px] absolute top-full left-[32px] ">
          <div className="h-[36px] flex items-center p-[6px] text-[#F43F5E] text-heading/s gap-[7px]">
            <IconLogout />
            <span>로그아웃</span>
          </div>
        </ul>
      </button>
    </>
  );
};
